import { FC } from 'react'
import { Container, MenuLink, PolygonImg, ReportsDropDown } from './styled'

interface IProps {
  open: boolean
  item: string
}
const MenuHeader: FC<IProps> = ({ open, item }) => {
  const forecastMenu = [
    {
      name: 'Статистика по прогнозам',
      link: 'forecast_statistics',
    },
    {
      name: 'Прогноз',
      link: 'forecast',
    },
  ]

  const referencуBooks = [
    {
      name: 'Точки и адреса доставки',
      link: 'adress',
    },
    {
      name: 'Регионы',
      link: 'forecast_statistics',
    },
    {
      name: 'SCU',
      link: 'scu',
    },
    {
      name: 'Цены',
      link: 'prices',
    },
    {
      name: 'База товаров',
      link: 'data_items',
    },
    {
      name: 'Склады',
      link: 'stocks',
    },
  ]

  return (
    <Container open={open}>
      <PolygonImg />
      <ReportsDropDown>
        {item === 'Прогнозы' &&
          forecastMenu.map((item) => (
            <MenuLink key={item.name} to={item.link}>
              {item.name}
            </MenuLink>
          ))}
        {item === 'Отчеты' && <MenuLink to="soon">In progress...</MenuLink>}
        {item === 'Справочники' &&
          referencуBooks.map((item) => (
            <MenuLink key={item.name} to={item.link}>
              {item.name}
            </MenuLink>
          ))}
      </ReportsDropDown>
    </Container>
  )
}

export default MenuHeader
