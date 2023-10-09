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

  span {
    width: 100%;
    text-align: left;
    font-family: var(--ff-light);
    margin: 5px 0 25px;
    font-size: var(--fs-14);
    line-height: var(--line-height-16);
    color: var(--color-red);
  }
`

export const Wrapper = styled.div`
  margin: 150px;
  height: 563px;
`
