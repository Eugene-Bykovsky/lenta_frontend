import { useEffect } from 'react'
import { Table } from '../../components/table/Table'
import {
  ButtonExcel,
  ButtonRemoveFilters,
  ButtonSearch,
} from '../../components/UI/button/ButtonUI'
import Selector from '../../components/UI/selector/Selector'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchCategory, fetchForecast } from './forecastSlice'
import { FilterBlock, ForecastContainer, Header, Selectors } from './styled'

export const TableForecast = () => {
  const { error, loading, forecast, category } = useAppSelector(
    (state) => state.forecast
  )

  const forecastTable = forecast.map((fcstItem) => {
    const categegoryConcat = category.find(
      (cat) => cat.pr_sku_id === fcstItem.pr_sku_id
    )
    return { ...fcstItem, ...categegoryConcat }
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchForecast())
    dispatch(fetchCategory())
  }, [dispatch])

  const filterTxt = [
    'Группа товара',
    'Выбор ТК : ',
    'Категория товара : ',
    'Подкатегория товара: ',
    'Спрос на: ',
    'Город',
  ]

  return (
    <ForecastContainer>
      <Header>Прогноз</Header>
      <FilterBlock>
        <Selectors>
          {filterTxt.map((item) => (
            <Selector key={item} text={item} />
          ))}
        </Selectors>
        <ButtonSearch />
        <ButtonRemoveFilters />
      </FilterBlock>

      <ButtonExcel />

      {loading && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <Table forecastTable={forecastTable} />}
    </ForecastContainer>
  )
}
