import { useEffect } from 'react'
import { FilterBox } from '../../components/filter-box/FilterBox'
import SunLoader from '../../components/loader/Loader'
import { Table } from '../../components/table/Table'
import { ButtonExcel } from '../../components/UI/button/ButtonUI'
import InputComponent from '../../components/UI/input/Input'
import {
  fetchCategory,
  fetchForecast,
  selectForecastTable,
} from '../../features/table-forecast/forecastSlice'
import { ForecastContainer, Header } from '../../features/table-forecast/styled'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { COlUMN_Statistic, SELECT_CONF_STAT } from '../../services/const'

const Statistics = () => {
  const dispatch = useAppDispatch()
  const { error, loadingForecast, loadingCategory, page, rows } =
    useAppSelector((state) => state.forecast)
  const forecastTable = useAppSelector(selectForecastTable)

  useEffect(() => {
    dispatch(fetchForecast({ id: page, qty: rows }))
    dispatch(fetchCategory())
  }, [dispatch, page, rows])

  if (loadingForecast || loadingCategory) return <SunLoader />
  if (error) return <div>{error}</div>

  return (
    <ForecastContainer>
      <Header>Статистика по прогнозам</Header>
      <FilterBox selectors={SELECT_CONF_STAT} text="stat" />
      <InputComponent />
      <ButtonExcel />
      <Table
        forecastTable={forecastTable}
        colomnsName={COlUMN_Statistic}
        name="statistic"
      />
    </ForecastContainer>
  )
}

export { Statistics }
