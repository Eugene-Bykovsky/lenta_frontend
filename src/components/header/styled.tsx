import styled from 'styled-components'
import { Arrow } from '../UI/Icons/Arrow'

export const IconOpenDwn = styled(Arrow)``

export const HeaderDiv = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: var(--color-white);
  background-color: var(--color-blue-1);
`

export const Reports = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 336px;
  gap: 80px;
`

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 48px;
  height: auto;
  padding: 4px;
  margin-left: 80px;
`

export const MenuDown = styled.div`
  // position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DropdownButton = styled.button`
  font-weight: var(--fw-700);
  font-size: var(--fs-16);
  line-height: var(--line-height-24);

  color: var(--color-white);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    // Поворачивайте иконку на 180 градусов при наведении
    & > ${IconOpenDwn} {
      transform: rotate(180deg);
    }
  }
`
