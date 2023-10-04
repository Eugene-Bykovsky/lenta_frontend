import { FC, useState, ReactNode } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { TableBox } from './styled'
import { Checkbox } from '../UI/checkbox/CheckBox'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  children?: ReactNode
}

type TforecastTab = {
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
}

const columnHelper = createColumnHelper<TforecastTab>()
const columns = [
  columnHelper.accessor('filter', {
    header: () => <Checkbox />,
    cell: () => <Checkbox />,
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
  columnHelper.accessor('date', {
    header: 'День продажи',
    footer: (info) => info.column.id,
  }),
]

export const Table: FC<{ forecastTable: TforecastTab[] }> = ({
  forecastTable,
}) => {
  const [data] = useState(forecastTable)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableBox>
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
    </TableBox>
  )
}
