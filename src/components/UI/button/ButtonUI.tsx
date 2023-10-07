import { FC } from 'react'
import { Link } from 'react-router-dom'
import { setupModal } from '../../../features/table-forecast/forecastSlice'
import { useAppDispatch } from '../../../hooks'
import { BtnRemoveFilter, ButtonBlueBig, ButtonSrch } from './styled'

interface ButtonConfirmExlProps {
  onClick?: () => void
}

const ButtonExcel: FC = () => {
  const dispatch = useAppDispatch()
  const handleExcelLoading = () => {
    dispatch(setupModal(true))
  }
  return (
    <Link
      to={{
        pathname: `/excel-page`,
      }}
      state={{
        state: { modal: true },
        background: '/forecast',
      }}
    >
      <ButtonBlueBig onClick={handleExcelLoading}>
        Выгрузить в excel
      </ButtonBlueBig>
    </Link>
  )
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

const ButtonConfirmExl: FC<ButtonConfirmExlProps> = ({ onClick }) => {
  return <BtnRemoveFilter onClick={onClick}>ОК</BtnRemoveFilter>
}

export { ButtonExcel, ButtonSearch, ButtonRemoveFilters, ButtonConfirmExl }
