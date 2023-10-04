import { useNavigate } from 'react-router-dom'
import { Button, ErrorExit, ErrorMessage, ErrorPage } from './styled'
import logo from '../asset/404.png'

export function NotFound404() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <ErrorPage>
      <img src={logo} alt="страница ошибки" />
      <ErrorMessage>Упс! Кажется, вы не туда попали.</ErrorMessage>
      <ErrorExit>Перейдите на главную страницу сайта</ErrorExit>
      <Button onClick={handleClick}>Перейти</Button>
    </ErrorPage>
  )
}
