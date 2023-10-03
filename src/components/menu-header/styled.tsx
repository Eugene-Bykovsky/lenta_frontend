import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Polygon } from '../UI/Icons/Polygon'

export const Container = styled.div<{
  open: boolean
}>`
  position: fixed;
  margin-top: 25px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`

export const ReportsDropDown = styled.div`
  min-width: 448px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;

  background: var(--color-white);
  border-radius: 16px;
  box-shadow: var(--custom-box-shadow);
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);

  &:hover {
    color: var(--color-grey-2);
  }
`
export const PolygonImg = styled(Polygon)``
