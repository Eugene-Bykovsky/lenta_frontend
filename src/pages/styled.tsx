import styled from 'styled-components'

export const ErrorPage = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorMessage = styled.p`
  margin: 60px 0 40px 0;
  font-size: var(--fs-30);
`

export const ErrorExit = styled.p`
  margin: 0 0 35px 0;
  font-size: var(--fs-24);
  font-weight: var(--fw-300);
`

export const Button = styled.button`
  padding: 12px;
  cursor: pointer;

  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: var(--line-height-17);

  background-color: var(--color-blue-1);
  color: white;
  border-radius: 16px;

  &: hover {
    background: var(--color-blue-2);
  }
`