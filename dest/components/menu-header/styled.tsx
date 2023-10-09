import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Exit } from '../UI/Icons/Exit'
import { ExitHover } from '../UI/Icons/ExitHover'
import { Polygon } from '../UI/Icons/Polygon'

export const PolygonImgContainer = styled.div<{ item: string }>`
  margin-bottom: -7px;
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
    `}
  z-index: 2;
`

export const ReportsDropDown = styled.div`
  min-width: 448px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 25px;

  background: var(--color-white);
  border-radius: 16px;
  box-shadow: var(--custom-box-shadow);
`

export const MenuLink = styled(Link)<{ item: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  juctify-content: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-black);

  &:hover {
    color: var(--color-blue-1);
  }

  ${({ item }) =>
    item === 'Выход' &&
    css`
      padding-top: 10px;
      align-items: end;
      color: var(--color-grey-2);

      &::before {
        content: '';
        position: absolute;
        top: 68%;
        left: 0;
        right: 0;
        border-top: solid 2px var(--color-grey-3);
      }

      &:hover {
        color: var(--color-black);
        svg:first-child {
          display: none;
        }
        svg:last-child {
          display: block;
        }
      }

      svg:first-child {
        display: block;
      }

      svg:last-child {
        display: none;
      }
    `};
`

export const ExitIcon = styled(Exit)`
  display: block;
`

export const ExitHov = styled(ExitHover)`
  display: none;
`

export const ExitBox = styled.div`
  border-top: 1px solid black;
`
