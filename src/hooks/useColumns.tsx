import { createColumnHelper } from '@tanstack/react-table'
import { TColumns } from '../services/const'

export function useForecastColumns(colomnsName: TColumns) {
  const columnHelper = createColumnHelper()

  return colomnsName.map((item) =>
    columnHelper.accessor(`${item.accessor}`, {
      header: `${item.header}`,
    })
  )
}
