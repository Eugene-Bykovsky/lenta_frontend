import {
  Contacts,
  FooterDiv,
  InfoFooter,
  LentaContainer,
  LogoFooter,
  Phone,
  PhoneCode,
  PhoneIcon,
} from './styled'

import iconPhone from '../../asset/icon-phone.svg'
import logo from '../../asset/logo-footer.svg'
import info from '../../asset/footerInn.svg'
import TelegramLink from '../UI/telegram/Telegram'

export default function Footer() {
  return (
    <FooterDiv>
      <LentaContainer>
        <LogoFooter src={logo} alt="логотип-лента" />
        <InfoFooter src={info} alt="логотип-лента" />
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
