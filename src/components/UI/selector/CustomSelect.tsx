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
  options: string[]
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
          $isDefault={selectedOption === '-Все-'}
          $isOpen={isOpen}
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
                key={option}
                onClick={() => handleOptionClick(option)}
                className={option === selectedOption ? 'selected' : ''}
              >
                {option}
                {option === selectedOption}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </SelectWrapper>
    </CustomSelectWrapper>
  )
}

export default CustomSelect
