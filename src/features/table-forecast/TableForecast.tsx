import { useEffect } from 'react'
import { Table } from '../../components/table/Table'
import {
  ButtonExcel,
  ButtonRemoveFilters,
  ButtonSearch,
} from '../../components/UI/button/ButtonUI'
import InputComponent from '../../components/UI/input/Input'
import CustomSelect from '../../components/UI/selector/CustomSelect'
import { useAppDispatch, useAppSelector } from '../../hooks'
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

export const TableForecast = () => {
  const dispatch = useAppDispatch()
  const { error, loading } = useAppSelector((state) => state.forecast)
  const forecastTable = useAppSelector(selectForecastTable)

  useEffect(() => {
    dispatch(fetchForecast())
    dispatch(fetchCategory())
  }, [dispatch])

  const filterTxt = [
    'Город :',
    'Категория товара : ',
    'Выбор ТК : ',
    'Подкатегория товара: ',
    'Группа товара :',
    'Товар :',
    'Спрос на: ',
  ]

  if (loading) return <div>Loading.....</div>
  if (error) return <div>{error}</div>

  const options = [
    { value: '-Все-' },
    { value: 'option 1' },
    { value: 'option 2' },
    { value: 'option 3' },
    { value: 'option 5' },
    { value: 'option 6' },
  ]

  return (
    <ForecastContainer>
      <Header>Прогноз</Header>
      <FilterBlock>
        <Selectors>
          {filterTxt.map((item) => (
            <CustomSelect key={item} text={item} options={options} />
          ))}
          <ButtonBox>
            <ButtonSearch />
            <ButtonRemoveFilters />
          </ButtonBox>
        </Selectors>
      </FilterBlock>
      <InputComponent />
      <ButtonExcel />
      <Table forecastTable={forecastTable} />
    </ForecastContainer>
  )
}
