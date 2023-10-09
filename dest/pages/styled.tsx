import styled from 'styled-components'

export const ErrorPage = styled.div`
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorMessage = styled.h1`
  margin: 60px 0 30px 0;
  font-size: var(--fs-30);
  font-family: var(--ff-bold);
`

export const ErrorExit = styled.p`
  margin: 0 0 35px 0;
  font-size: var(--fs-24);
  font-weight: var(--fw-300);
`

export const Button = styled.button`
  padding: 14px;
  width: 320px;
  height: 40px;

  cursor: pointer;

  font-size: var(--fs-14);
  line-height: var(--line-height-17);
  font-family: var(--ff-primary);

  background-color: var(--color-blue-1);
  color: white;
  border: none;
  border-radius: 16px;

  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    color: var(--color-black);
    background: var(--color-button-blue-2);
  }
`
