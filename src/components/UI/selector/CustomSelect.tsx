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
  name: string
  options: string[]
  onSelect: (selected: string, index: number) => void
  id?: string
}

const CustomSelect: FC<TProps> = ({ name, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('-Все-')
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    const selectedIndex = options.indexOf(option)
    onSelect(option, selectedIndex)
  }

  return (
    <CustomSelectWrapper>
      <LabelText>{name} </LabelText>
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
