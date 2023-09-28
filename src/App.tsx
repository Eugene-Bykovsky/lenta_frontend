import './styles.css'
// import pic from './asset/logo.jpeg'
// import cat from './asset/cat.svg'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import { fetchUsers } from './components/features/users/userSlice'
import { Users } from './components/features/users/users'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <h1>Lenta</h1>
      {/* <img src={pic} alt="logo" width="300" />
      <img src={cat} alt="cat" width="300" /> */}
      <Users />
    </>
  )
}

export default App
