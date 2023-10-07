import { ButtonBlueBig } from '../../components/UI/button/styled'

import { AuthWrapper, HeaderAuth, Wrapper } from './styled'

export function Login() {
  return (
    <Wrapper>
      <AuthWrapper>
        <HeaderAuth>Авторизация</HeaderAuth>
        {/* <InputAuth placeholder={'Почта'} />
        <InputAuth placeholder={'Пароль'} /> */}
        <ButtonBlueBig>Войти</ButtonBlueBig>
      </AuthWrapper>
    </Wrapper>
  )
}
