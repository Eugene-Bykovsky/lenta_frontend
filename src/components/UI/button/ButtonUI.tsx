import { FC } from 'react'
import { BtnRemoveFilter, ButtonExl, ButtonSrch } from './styled'

const ButtonExcel: FC = () => {
  const handleExcelDwnld = () => {
    console.log('dwnld into Excel')
  }
  return <ButtonExl onClick={handleExcelDwnld}>Выгрузить в excel</ButtonExl>
}

const ButtonSearch: FC = () => {
  const handleSearch = () => {
    console.log('search...')
  }
  return <ButtonSrch onClick={handleSearch}>Найти</ButtonSrch>
}

const ButtonRemoveFilters: FC = () => {
  const handleClearFilters = () => {
    console.log('remove filters...')
  }
  return (
    <BtnRemoveFilter onClick={handleClearFilters}>Сбросить</BtnRemoveFilter>
  )
}

export { ButtonExcel, ButtonSearch, ButtonRemoveFilters }
