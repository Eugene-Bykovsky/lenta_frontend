import { FC, ReactNode, useState } from 'react'

export interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  children?: ReactNode
}

const Checkbox: FC = () => {
  const [checked, setCheck] = useState(false)

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setCheck((prev) => !prev)}
    />
  )
}
export { Checkbox }
