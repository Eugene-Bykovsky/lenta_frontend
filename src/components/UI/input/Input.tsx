import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { Search } from '../Icons/Search'

const InputContainer = styled.div`
  margin: 0 0 50px;
  position: relative;
  width: 528px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  line-height: 56px;
  padding-left: 40px;
  border-radius: 8px;
  border: var(--border-input);
  color: var(--color-grey-2);
  font-family: var(--ff-primary);

  &:focus {
    outline: none;
    border: var(--border-input-blue);
  }
`

const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <InputContainer>
      <SearchIconContainer>
        <Search />
      </SearchIconContainer>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Поиск"
      />
    </InputContainer>
  )
}

export default InputComponent
