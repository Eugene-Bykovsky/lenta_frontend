import { FC, useState } from 'react'
import { ArrowGrey, ArrowGreyUp } from '../Icons/ArrowGrey'
import {
  CustomSelectWrapper,
  Dropdown,
  DropdownItem,
  LabelText,
  SelectButton,
  SelectWrapper,
} from './styled'

type TProps = {
  text: string
  options: { value: string }[]
}

const CustomSelect: FC<TProps> = ({ text, options }) => {
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
          isOpen={isOpen}
        >
          {selectedOption}
          {selectedOption === '-Все-'}

          <ArrowGreyUp />
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
