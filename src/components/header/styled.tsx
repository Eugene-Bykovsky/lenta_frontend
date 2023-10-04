import styled from 'styled-components'
import { Arrow } from '../UI/Icons/Arrow'
import { User } from '../UI/Icons/User'

export const IconOpenDwn = styled(Arrow)``
export const IconUser = styled(User)``

export const HeaderDiv = styled.header`
  padding: 0px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 212px;

  color: var(--color-white);
  background-color: var(--color-blue-1);
`

export const Reports = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
`

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 48px;
  height: auto;
  padding: 4px;
`

export const MenuDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    margin-left: auto;
    align-items: end;
  }
`

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: var(--fw-700);
  font-size: var(--fs-16);
  line-height: var(--line-height-24);

  color: var(--color-white);
  background: transparent;
  border: none;
  cursor: pointer;
`
