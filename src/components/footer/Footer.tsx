import {
  Contacts,
  FooterDiv,
  Phone,
  PhoneCode,
  PhoneIcon,
  Telegram,
} from './styled'

import iconTg from '../../asset/icon-telegram.svg'
import iconPhone from '../../asset/icon-phone.svg'

export default function Footer() {
  return (
    <FooterDiv>
      <Contacts>
        <PhoneIcon src={iconPhone} alt="logo-телефон" />
        <PhoneCode>
          8 800 <Phone>700 4 111</Phone>
        </PhoneCode>
        <Telegram src={iconTg} alt="logo-telegramm" />
      </Contacts>
    </FooterDiv>
  )
}
