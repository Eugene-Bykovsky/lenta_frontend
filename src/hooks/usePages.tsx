import { useState, ChangeEvent } from 'react'
import { useAppSelector } from '../hooks'

const usePages = () => {
  const { rows } = useAppSelector((state) => state.forecast)
  const [pagesQty, setPagesQty] = useState<number | null>(rows)

  const handlePage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    if (name === 'page' && (value === '' || /^[0-9]+$/.test(value))) {
      setPagesQty(Number(value))
    }
  }

  return { pagesQty, handlePage, setPagesQty }
}

export default usePages
