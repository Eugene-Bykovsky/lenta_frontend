import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 10px;
  margin-bottom: 30px;

  line-height: 24px;
  font-size: var(--fs-16);
  font-weight: var(--fw-300);

  border-radius: 8px;
  border: var(--border-input);
  color: var(--color-grey-2);
  font-family: var(--ff-primary);

  &:focus {
    outline: none;
    border: var(--border-input-blue);
  }
`

type TAuth = {
  placeholder: string
  value?: string
}

export const InputAuth: FC<TAuth> = ({ placeholder, value = '' }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
