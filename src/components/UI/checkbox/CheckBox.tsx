import { FC } from 'react'

export interface CheckboxProps {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  name?: string
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, name }) => {
  console.log(name, checked)

  return <input type="checkbox" checked={checked} onChange={onChange} />
}

export { Checkbox }
