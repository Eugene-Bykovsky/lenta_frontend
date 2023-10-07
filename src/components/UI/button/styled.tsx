import styled from 'styled-components'

export const ButtonBlueBig = styled.button`
  padding: 12px;
  width: 304px;
  height: 40px;
  margin-bottom: 20px;

  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: var(--line-height-17);
  font-family: var(--ff-primary)

  color: var(--color-black);
  background: var(--color-button-blue-2);
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: background 0.3s ease-in-out,
  color 0.3s ease-in-out;

  &:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1)
  }

`

export const ButtonSrch = styled.button`
  width: 192px;
  height: 40px;

  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: var(--line-height-17);

  background: var(--color-button-blue-1);
  color: var(--color-white);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-family: var(--ff-primary);

  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background: var(--color-button-blue-2);
  }
`

export const BtnRemoveFilter = styled.button`
  width: 192px;
  height: 40px;
  font-family: var(--ff-primary);
  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: var(--line-height-16);

  color: var(--color-black);
  background: var(--color-button-blue-2);
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1);
  }
`

export const ButtonExlDwld = styled.button`
  padding: 12px;
  width: 192px;
  height: 40px;

  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: var(--line-height-16);
  font-family: var(--ff-primary)


  color: var(--color-white);
  background: var(--color-button-blue-1);
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: background 0.3s ease-in-out,
  color 0.3s ease-in-out;

  &:hover {
    color: var(--color-black);
    background: var(--color-button-blue-2)
  }

`

export const ButtonWrapper = styled.button`
  appearance: none;
  background: none;
  border: none;
`

export const ButtonLogin = styled.button`
  appearance: none;
  background: none;
  border: none;
`
