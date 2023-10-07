import styled from 'styled-components'

export const HeaderAuth = styled.h1`
  margin: 0 0 35px;
  padding: 0;

  font-size: var(--fs-24);
  font-family: var(--ff-bold);
  line-height: var(--line-height-32);
`

export const AuthWrapper = styled.div`
  width: 414px;
  margin: 150px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:nth-child(3) {
    margin-bottom: 40px;
  }
`

export const Wrapper = styled.div`
  margin: 150px;
  height: 563px;
`
