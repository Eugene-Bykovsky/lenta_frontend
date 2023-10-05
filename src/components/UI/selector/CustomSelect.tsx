import { FC, useState } from 'react'
import { ArrowGrey } from '../Icons/ArrowGrey'

import {
  CustomSelectWrapper,
  Dropdown,
  DropdownItem,
  LabelText,
  SelectButton,
  SelectWrapper,
} from './styled'

const options = [
  { value: '-Все-' },
  { value: 'option 1' },
  { value: 'option 2' },
  { value: 'option 3' },
  { value: 'option 5' },
  { value: 'option 6' },
]

type TProps = {
  text: string
}
const CustomSelect: FC<TProps> = ({ text }) => {
  const [selectedOption, setSelectedOption] = useState('-Все-')
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <CustomSelectWrapper>
      <LabelText>{text} </LabelText>
      <SelectWrapper>
        <SelectButton
          onClick={toggleDropdown}
          isDefault={selectedOption === '-Все-'}
        >
          {selectedOption}
          {selectedOption === '-Все-'}
          <ArrowGrey />
        </SelectButton>
        {isOpen && (
          <Dropdown>
            {options.map((option) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={option.value === selectedOption ? 'selected' : ''}
              >
                {option.value}
                {
                  option.value === selectedOption
                  // && (<Checkmark>&#10003;</Checkmark>)
                }
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </SelectWrapper>
    </CustomSelectWrapper>
  )
}

export default CustomSelect
