import { useState, ChangeEvent } from 'react'
import { useAppSelector } from '../hooks'

export const useRows = () => {
  const { rows } = useAppSelector((state) => state.forecast)
  const [rowsQty, setRowsQty] = useState<number | null>(rows)

  const handleRows = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    if (name === 'rows' && (value === '' || /^[0-9]+$/.test(value))) {
      setRowsQty(value ? parseInt(value, 10) : 0)
    }
  }

  return { rowsQty, handleRows, setRowsQty }
}
