import { FC } from 'react'
import {
  Container,
  ExitIcon,
  MenuLink,
  PolygonImg,
  PolygonImgContainer,
  ReportsDropDown,
} from './styled'

interface IProps {
  open: boolean
  item: string
  onCloseReports: (value: number | false) => void
}
const MenuHeader: FC<IProps> = ({ open, item, onCloseReports }) => {
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
      name: 'SKU',
      link: 'sku',
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
            <MenuLink
              key={item.name}
              to={item.link}
              onClick={() => onCloseReports(false)}
            >
              {item.name}
            </MenuLink>
          ))}
        {item === 'Отчеты' && (
          <MenuLink to="soon" onClick={() => onCloseReports(false)}>
            В процессе разработки...
          </MenuLink>
        )}
        {item === 'Справочники' &&
          referencуBooks.map((item) => (
            <MenuLink
              key={item.name}
              to={item.link}
              onClick={() => onCloseReports(false)}
            >
              {item.name}
            </MenuLink>
          ))}
        {item === 'LogIn' &&
          logIn.map((item) =>
            item.name === 'Выход' ? (
              <MenuLink
                key={item.name}
                item={item.name}
                to={item.link}
                onClick={() => onCloseReports(false)}
              >
                <ExitIcon />
                {item.name}
              </MenuLink>
            ) : (
              <MenuLink
                key={item.name}
                to={item.link}
                onClick={() => onCloseReports(false)}
              >
                {item.name}
              </MenuLink>
            )
          )}
      </ReportsDropDown>
    </Container>
  )
}

export default MenuHeader
