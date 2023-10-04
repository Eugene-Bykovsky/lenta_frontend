import { useState, ChangeEvent, FC } from 'react'
import { SelectorBox } from './styled'

type TProps = {
  text: string
}

const Selector: FC<TProps> = ({ text }) => {
  const options = [
    { value: '-Все-' },
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' },
  ]

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)

    setSelectedOption(event.target.value)
  }

  return (
    <SelectorBox>
      <label htmlFor="dropdown">{text} </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </SelectorBox>
  )
}

export default Selector
