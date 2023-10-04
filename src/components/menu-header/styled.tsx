import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Polygon } from '../UI/Icons/Polygon'

export const PolygonImgContainer = styled.div<{ item: string }>`
  margin-bottom: -4px;
  ${({ item }) =>
    item === 'LogIn' &&
    css`
      svg {
        padding-right: 40px;
      }
    `}
`

export const PolygonImg = styled(Polygon)``

export const Container = styled.div<{ open: boolean; item: string }>`
  position: fixed;
  margin-top: 21px;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  ${({ item }) =>
    item === 'LogIn' &&
    css`
      align-items: end;

      // &:nth-child(1) {
      //   margin-top: 100px;
      // }
    `}
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
