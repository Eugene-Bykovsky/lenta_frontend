import styled, { css } from 'styled-components'
import {
  CustomSelectWrapper,
  SelectButton,
} from '../../components/UI/selector/styled'

export const ForecastContainer = styled.div`
  width: 1760px;
  margin: auto;
`
export const Header = styled.h1`
  margin-top: 60px;
  font-weight: var(--fw-400);
  font-size: var(--fs-30);
  line-height: var(--line-height-35);
  font-family: var(--ff-bold);
`

export const FilterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

type FilterBlockProps = {
  text?: string
}
export const Selectors = styled.div<FilterBlockProps>`
  max-width: 1250px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  gap: 32px;
  column-gap: 150px;

  ${({ text }) =>
    text === 'stat' &&
    css`
      max-width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      column-gap: 80px;

      ${CustomSelectWrapper} {
        position: relative;
        width: 528px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
      }

      ${SelectButton}:nth-last-child(-n+2) {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
      }
    `};
`

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

// :nth-last-child(-n+2) {
//   width: 100%;
// }
