import { useAppSelector } from '../../hooks'

export const TableForecast = () => {
  const { error, loading } = useAppSelector((state) => state.forecast)

  return (
    <>
      {loading && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <div>Ok !</div>}
    </>
  )
}
