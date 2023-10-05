import styled from 'styled-components'

export const ForecastContainer = styled.div`
  width: 1760px;
  margin: auto;
`
export const Header = styled.h1`
  font-weight: var(--fw-400);
  font-size: var(--fs-30);
  line-height: var(--line-height-35);
`

export const FilterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const Selectors = styled.div`
  max-width: 1250px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  gap: 32px;
`
