import { FC, useState, ReactNode } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { TableBox } from './styled'
import { Checkbox } from '../UI/checkbox/CheckBox'
import CustomScrollbar from '../UI/scroll/scroll'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  children?: ReactNode
}

export type TforecastTab = {
  st_id: string
  pr_group_id?: string | undefined
  pr_cat_id?: string | undefined
  pr_subcat_id?: string | undefined
  pr_sku_id: string
  target: number
  id: number
  date: string
  pr_uom_id?: number | undefined
  filter?: CheckboxProps
  checked?: boolean
  [key: string]: unknown
}

const columnHelper = createColumnHelper<TforecastTab>()

interface TForecastTableProps {
  forecastTable: TforecastTab[]
  column?: number
}

export const Table: FC<TForecastTableProps> = ({ forecastTable }) => {
  const [data, setData] = useState(forecastTable)
  const [headerCheck, setHeaderCheck] = useState(false)

  const handleAllRows = () => {
    const dataAll: TforecastTab[] = data.map((item) => {
      if (data.every((i) => i.checked)) {
        return { ...item, checked: false }
      }
      if (data.some((i) => i.checked)) return { ...item, checked: true }
      if (data.every((i) => !i.checked)) return { ...item, checked: true }
      return item
    })
    setHeaderCheck(dataAll.some((item) => (item.checked ? true : false)))
    setData(dataAll)
  }

  const handleChangeData = (id: number) => {
    const dataUpdate = data.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setData(dataUpdate)
  }

  const generateDateColumns = (days: number) => {
    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}.${month}.${year}`
    }

    const today = new Date()

    return Array.from({ length: days }).map((_, i) => {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dateString = formatDate(date)
      return columnHelper.accessor(`date_${dateString}`, {
        header: dateString,
        cell: (info) =>
          info.row.original.date === dateString ? info.row.original.target : '',
        footer: (info) => info.column.id,
      })
    })
  }

  const dateColumns = generateDateColumns(30)

  const columns = [
    columnHelper.accessor('filter', {
      header: () => (
        <Checkbox
          name="header"
          checked={headerCheck}
          onChange={() => {
            handleAllRows()
          }}
        />
      ),
      cell: (info) => (
        <Checkbox
          checked={info.row.original.checked}
          onChange={() => {
            handleChangeData(info.row.original.id)
          }}
        />
      ),
    }),

    columnHelper.accessor('st_id', {
      header: 'ТК',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('pr_group_id', {
      header: 'Группа',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('pr_cat_id', {
      header: 'Категория',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('pr_subcat_id', {
      header: 'Подкатегория',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('pr_sku_id', {
      header: 'SKU',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('target', {
      header: 'Количество на 14 дней',
      footer: (info) => info.column.id,
    }),
    ...dateColumns,
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableBox>
      <CustomScrollbar>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CustomScrollbar>
    </TableBox>
  )
}
