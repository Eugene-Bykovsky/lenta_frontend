import {
  Contacts,
  FooterDiv,
  LentaContainer,
  LogoFooter,
  Phone,
  PhoneCode,
  PhoneIcon,
} from './styled'

import iconPhone from '../../asset/icon-phone.svg'
import logo from '../../asset/logo-footer.svg'
import TelegramLink from '../UI/telegram/Telegram'

export default function Footer() {
  return (
    <FooterDiv>
      <LentaContainer>
        <LogoFooter src={logo} alt="логотип-лента" />
        <div>
          <p>
            c 2023 Lenta.com ООО «Лента» / Адрес 197374 г. Санкт-Петербург, ул.
            Савушкина, д.112, Литера Б. ИНН 7814148471 · ОГРН 1037832048605
            Литера
          </p>
          <p>Б. ИНН 7814148471 · ОГРН 1037832048605</p>
          <p>Политика обработки персональных данных</p>
        </div>
      </LentaContainer>

      <Contacts>
        <PhoneIcon src={iconPhone} alt="логотип-телефон" />
        <PhoneCode>
          8 800 <Phone>700 4 111</Phone>
        </PhoneCode>
        <TelegramLink />
      </Contacts>
    </FooterDiv>
  )
}
