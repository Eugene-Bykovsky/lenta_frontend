import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBlueBig } from '../../components/UI/button/styled'
import { CustomInput } from '../../components/UI/input/inputLogin'
import { setAuth } from '../../features/table-forecast/forecastSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

import { AuthWrapper, HeaderAuth, Wrapper } from './styled'

export function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({ email: '', password: '' })
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }
  const { isAuth } = useAppSelector((state) => state.forecast)

  const handleAuth = () => {
    const { email, password } = inputValue
    const numb = Number(password)

    if (email === 'user' && numb === 123) {
      navigate('/forecast')
      dispatch(setAuth(true))
    }
    dispatch(setAuth(false))
  }

  return (
    <Wrapper>
      <AuthWrapper>
        <HeaderAuth>Авторизация</HeaderAuth>
        <CustomInput
          type="text"
          name="email"
          placeholder={'Почта'}
          value={inputValue.email}
          onChange={(event) => handleChange(event)}
        />
        {!isAuth && (
          <span>Введите тестовые данные. Почта: user Пароль: 123</span>
        )}
        <CustomInput
          type="password"
          name="password"
          placeholder={'Пароль'}
          value={inputValue.password}
          onChange={(event) => handleChange(event)}
        />

        {!isAuth && <span>Аккаунт не найден. Проверьте почту и пароль</span>}

        <ButtonBlueBig onClick={handleAuth}>Войти</ButtonBlueBig>
      </AuthWrapper>
    </Wrapper>
  )
}
