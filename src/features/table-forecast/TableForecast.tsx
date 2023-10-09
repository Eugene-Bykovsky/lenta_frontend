import React, { useEffect } from 'react'
import { Table } from '../../components/table/Table'
import {
  ButtonExcel,
  ButtonRemoveFilters,
  ButtonSearch,
} from '../../components/UI/button/ButtonUI'
import InputComponent from '../../components/UI/input/Input'
import CustomSelect from '../../components/UI/selector/CustomSelect'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { COlUMN_Forecast, SELECT_CONF } from '../../services/const'

import {
  fetchCategory,
  fetchForecast,
  selectForecastTable,
} from './forecastSlice'
import {
  ButtonBox,
  FilterBlock,
  ForecastContainer,
  Header,
  Selectors,
} from './styled'

const TableForecast = () => {
  const dispatch = useAppDispatch()
  const { error, loadingForecast, loadingCategory, page, rows } =
    useAppSelector((state) => state.forecast)
  const forecastTable = useAppSelector(selectForecastTable)

  useEffect(() => {
    dispatch(fetchForecast({ id: page, qty: rows }))
    dispatch(fetchCategory())
  }, [dispatch, page, rows])

  if (loadingForecast || loadingCategory) return <div>Loading.....</div>
  if (error) return <div>{error}</div>

  return (
    <ForecastContainer>
      <Header>Прогноз</Header>
      <FilterBlock>
        <Selectors>
          {SELECT_CONF.map((item) => (
            <CustomSelect
              key={item.name}
              text={item.name}
              options={item.options}
            />
          ))}
          <ButtonBox>
            <ButtonSearch />
            <ButtonRemoveFilters />
          </ButtonBox>
        </Selectors>
      </FilterBlock>
      <InputComponent />
      <ButtonExcel />
      <Table forecastTable={forecastTable} colomnsName={COlUMN_Forecast} />
    </ForecastContainer>
  )
}

export { TableForecast }
