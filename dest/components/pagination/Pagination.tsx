import { FC, useEffect, useState } from 'react'
import { setPage } from '../../features/table-forecast/forecastSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { PageBtn } from '../table/styled'

export const Pagination: FC<{
  handlePageChange: (pageNum: number) => void
}> = ({ handlePageChange }) => {
  const dispatch = useAppDispatch()
  const { page } = useAppSelector((state) => state.forecast)
  const [baseNumber, setBaseNumber] = useState(page)

  const handleNext = () => {
    setBaseNumber((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (baseNumber > 1) {
      setBaseNumber((prev) => prev - 1)
    }
  }

  const handlePageNumberClick = (pageNum: number) => {
    handlePageChange(pageNum)
    setBaseNumber(pageNum)
  }

  const buttons = [baseNumber, baseNumber + 1, baseNumber + 2]

  useEffect(() => {
    dispatch(setPage(baseNumber))
  }, [baseNumber])

  return (
    <div>
      {baseNumber > 1 && (
        <PageBtn onClick={handlePrev} $specialColor={false}>
          Назад
        </PageBtn>
      )}
      {buttons.map((pageNum, idx) => (
        <PageBtn
          key={pageNum}
          onClick={() => handlePageNumberClick(pageNum)}
          $specialColor={idx === 0} // Первая кнопка всегда голубая
        >
          {pageNum}
        </PageBtn>
      ))}
      <PageBtn onClick={handleNext}>Далее</PageBtn>
    </div>
  )
}
