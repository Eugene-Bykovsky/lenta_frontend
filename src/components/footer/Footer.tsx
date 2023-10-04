import {
  Contacts,
  FooterDiv,
  InfoFooter,
  LentaContainer,
  LogoFooter,
  Phone,
  PhoneCode,
  PhoneIcon,
  Telegram,
} from './styled'

import iconTg from '../../asset/icon-telegram.svg'
import iconPhone from '../../asset/icon-phone.svg'
import logo from '../../asset/logo-footer.svg'
import info from '../../asset/footerInn.svg'

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
        <Telegram src={iconTg} alt="логотип-telegramm" />
      </Contacts>
    </FooterDiv>
  )
}
