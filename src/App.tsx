import './styles.css'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import { fetchForecast } from './features/table-forecast/forecastSlice'
import { SalesTable } from './components/sales-table/SalesTable'
import Header from './components/header/Header'
import Global from './global'
import Footer from './components/footer/Footer'
import { TableForecast } from './features/table-forecast/TableForecast'
import { Route, Routes } from 'react-router-dom'
import { NotFound404 } from './pages/NotFound404'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchForecast())
  }, [dispatch])
  return (
    <>
      <Global />
      <Header />

      <Routes>
        <Route path="/" element={<SalesTable />} />
        <Route path="/forecast" element={<TableForecast />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
