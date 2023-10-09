import React, { useEffect } from 'react'
import { FilterBox } from '../../components/filter-box/FilterBox'
import SunLoader from '../../components/loader/Loader'
import { Table } from '../../components/table/Table'
import { ButtonExcel } from '../../components/UI/button/ButtonUI'
import InputComponent from '../../components/UI/input/Input'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { COlUMN_Forecast, SELECT_CONF_FCST } from '../../services/const'

import {
  fetchCategory,
  fetchForecast,
  selectForecastTable,
} from './forecastSlice'
import { ForecastContainer, Header } from './styled'

const TableForecast = () => {
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
      <Header>Прогноз</Header>
      <FilterBox selectors={SELECT_CONF_FCST} text="forecast" />
      <InputComponent />
      <ButtonExcel />
      <Table
        forecastTable={forecastTable}
        colomnsName={COlUMN_Forecast}
        name="forecast"
      />
    </ForecastContainer>
  )
}

export { TableForecast }
