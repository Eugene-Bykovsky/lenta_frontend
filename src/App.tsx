import './styles.css'
import pic from './asset/logo.jpeg'
import cat from './asset/cat.svg'
import { Counter } from './counter'

function App() {
  return (
    <>
      <h1>
        Lenta
        {/* {process.env.NODE_ENV}
        {process.env.name} */}
      </h1>
      <img src={pic} alt="logo" width="300" />
      <img src={cat} alt="cat" width="300" />
      <Counter />
    </>
  )
}

export default App
