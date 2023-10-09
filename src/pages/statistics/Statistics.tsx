import React, { useEffect } from 'react'
import { Table } from '../../components/table/Table'
import {
  ButtonExcel,
  ButtonRemoveFilters,
  ButtonSearch,
} from '../../components/UI/button/ButtonUI'
import InputComponent from '../../components/UI/input/Input'
import CustomSelect from '../../components/UI/selector/CustomSelect'
import {
  fetchCategory,
  fetchForecast,
  selectForecastTable,
} from '../../features/table-forecast/forecastSlice'
import {
  ButtonBox,
  FilterBlock,
  ForecastContainer,
  Header,
  Selectors,
} from '../../features/table-forecast/styled'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { COlUMN_Statistic, SELECT_CONF } from '../../services/const'

const Statistics = () => {
  const dispatch = useAppDispatch()
  const { error, loadingForecast, loadingCategory } = useAppSelector(
    (state) => state.forecast
  )
  const forecastTable = useAppSelector(selectForecastTable)

  useEffect(() => {
    dispatch(fetchForecast())
    dispatch(fetchCategory())
  }, [dispatch])

  if (loadingForecast || loadingCategory) return <div>Loading.....</div>
  if (error) return <div>{error}</div>

  return (
    <ForecastContainer>
      <Header>Статистика по прогнозам</Header>
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
      <Table forecastTable={forecastTable} colomnsName={COlUMN_Statistic} />
    </ForecastContainer>
  )
}

export { Statistics }
