import { FC } from 'react'
import {
  Container,
  MenuLink,
  PolygonImg,
  PolygonImgContainer,
  ReportsDropDown,
} from './styled'

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

  const logIn = [
    {
      name: 'Личный кабинет',
      link: 'profile',
    },
    {
      name: 'Мои данные',
      link: 'userInfo',
    },
    {
      name: 'Выход',
      link: 'logOut',
    },
  ]

  return (
    <Container open={open} item={item}>
      <PolygonImgContainer item={item}>
        <PolygonImg />
      </PolygonImgContainer>

      <ReportsDropDown>
        {item === 'Прогнозы' &&
          forecastMenu.map((item) => (
            <MenuLink key={item.name} to={item.link}>
              {item.name}
            </MenuLink>
          ))}
        {item === 'Отчеты' && (
          <MenuLink to="soon">В процессе разработки...</MenuLink>
        )}
        {item === 'Справочники' &&
          referencуBooks.map((item) => (
            <MenuLink key={item.name} to={item.link}>
              {item.name}
            </MenuLink>
          ))}
        {item === 'LogIn' &&
          logIn.map((item) => (
            <MenuLink key={item.name} to={item.link}>
              {item.name}
            </MenuLink>
          ))}
      </ReportsDropDown>
    </Container>
  )
}

export default MenuHeader
