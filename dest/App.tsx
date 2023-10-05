import Header from './components/header/Header'
import Global from './global'
import Footer from './components/footer/Footer'
import { TableForecast } from './features/table-forecast/TableForecast'
import { Route, Routes } from 'react-router-dom'
import { NotFound404 } from './pages/NotFound404'

function App() {
  return (
    <>
      <Global />
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/forecast" element={<TableForecast />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
