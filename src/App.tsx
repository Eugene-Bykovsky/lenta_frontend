import Header from './components/header/Header'
import Global from './global'
import Footer from './components/footer/Footer'
import { TableForecast } from './features/table-forecast/TableForecast'
import { Route, Routes, useLocation } from 'react-router-dom'
import { NotFound404 } from './pages/NotFound404'
import { ExlDownLoad } from './components/excel-download/ExcelDownLoad'
import { Login } from './pages/login/Login'

function App() {
  const location = useLocation()
  const { state } = useLocation()
  const background = location?.state?.background

  return (
    <>
      <Global />
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forecast" element={<TableForecast />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {state && (
        <Routes>
          <Route path="/excel-page" element={<ExlDownLoad />} />
        </Routes>
      )}

      <Footer />
    </>
  )
}

export default App
