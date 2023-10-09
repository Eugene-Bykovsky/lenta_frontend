import styled from 'styled-components'
import React, { FC, useState } from 'react'
import { ArrowGrey } from '../Icons/ArrowGrey'

export const Wrapper = styled.div`
  width: 272px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Label = styled.label`
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  padding: 7px 5px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`

export const InputCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  border-radius: 4px;
  border: 1px solid #111111;

  svg {
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }
`

export interface CheckboxProps {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  name?: string
}

const CustomCheckbox: FC<CheckboxProps> = () => {
  const [ischeck, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!ischeck)
  }
  return (
    <Wrapper>
      <Label>
        <Input type="checkbox" checked={ischeck} onChange={handleChange} />
        <InputCustom>{ischeck && <ArrowGrey />}</InputCustom>
        Name !
      </Label>
    </Wrapper>
  )
}

export default CustomCheckbox
