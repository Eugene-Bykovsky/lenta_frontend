import React, { FC, useEffect, useState } from 'react'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  ButtonRow,
  PaginationBox,
  TableBox,
  TableContainer,
  TableWrapper,
} from './styled'
import { Checkbox } from '../UI/checkbox/CheckBox'
import CustomScrollbar from '../UI/scroll/scroll'
import { TColumns } from '../../services/const'
import { CustomInput } from '../UI/input/inputLogin'
import { useForecastColumns } from '../../hooks/useColumns'
import { Pagination } from '../pagination/Pagination'
import usePages from '../../hooks/usePages'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setRows } from '../../features/table-forecast/forecastSlice'
import { useRows } from '../../hooks/useRows'
import { SortingASC, SortingDesc } from '../UI/Icons/Sorting'

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
  filter?: string | React.ReactNode
  checked?: boolean
  [key: string]: unknown
  city?: string
  item?: string
}

interface TForecastTableProps {
  forecastTable: TforecastTab[]
  column?: number
  colomnsName: TColumns
  name: string
}

export const Table: FC<TForecastTableProps> = ({
  forecastTable,
  colomnsName,
}) => {
  const dispatch = useAppDispatch()
  const selectDaysTable = useAppSelector((state) => state.filters.days)
  const [data, setData] = useState(forecastTable)
  const { rowsQty, handleRows } = useRows()
  const { handlePage } = usePages()
  const [headerCheck, setHeaderCheck] = useState(false)
  const columnHelper = createColumnHelper<TforecastTab>()

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

  const generateDateColumns = (daysAhead: number) => {
    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth()).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}.${month}.${year}`
    }

    return Array.from({ length: daysAhead }).map((_, i) => {
      const date = new Date()

      date.setDate(date.getDate() - 52 + i)

      const formattedDate = formatDate(date).toString()

      return columnHelper.accessor(`${formattedDate}`, {
        cell: (info) => {
          return info.row.original.date === formattedDate
            ? info.row.original.target
            : ' '
        },
      })
    })
  }

  //создание колонок часть из констант + часть на выбор клиента (динамечески период)
  let dateColumns = generateDateColumns(selectDaysTable ?? 14)
  const forecastColumns = useForecastColumns(colomnsName)
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
    ...(forecastColumns as ColumnDef<TforecastTab, unknown>[]),
    ...dateColumns,
  ]

  //SORTING
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  useEffect(() => {
    dateColumns = generateDateColumns(selectDaysTable ?? 14)
  }, [forecastColumns])

  return (
    <TableContainer>
      <TableWrapper>
        <TableBox>
          <CustomScrollbar>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header, idx) => (
                      <th key={idx}>
                        {header.isPlaceholder ? null : (
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={header.column.getToggleSortingHandler()}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                header.column.getToggleSortingHandler()
                              }
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}

                            {{
                              asc: <SortingASC />,
                              desc: <SortingDesc />,
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CustomScrollbar>
        </TableBox>
      </TableWrapper>
      <PaginationBox>
        <Pagination handlePageChange={() => handlePage} />
        <CustomInput
          onChange={(e) => handleRows(e)}
          type="text"
          name="rows"
          value={rowsQty}
          placeholder={'10'}
        />
        <ButtonRow onClick={() => dispatch(setRows(rowsQty))}>
          кол-во строк
        </ButtonRow>
      </PaginationBox>
    </TableContainer>
  )
}
