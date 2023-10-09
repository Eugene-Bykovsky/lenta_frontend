import React, { FC, ChangeEvent } from 'react'
import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 10px;

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

type TInputProps = {
  placeholder?: string
  name: string
  value: string | number | null
  type: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput: FC<TInputProps> = ({
  placeholder,
  value = '',
  name,
  type,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder ?? ''}
      name={name}
    />
  )
}
