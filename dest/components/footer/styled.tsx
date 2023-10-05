import styled from 'styled-components'

// export const LogoFooter = styled(logo)``

export const FooterDiv = styled.footer`
  max-width: 1920px;
  height: 136px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;

  color: var(--color-black);
  background-color: var(--color-white);
`

export const Contacts = styled.div`
  color: var(--color-grey-4);
  padding-right: 80px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PhoneCode = styled.div`
  font-weight: var(--fw-500);
  font-size: var(--fs-22);
  line-height: var(--line-height-24);
`

export const Phone = styled.span`
  font-size: var(--fs-22);
  line-height: var(--line-height-24);
  font-family: var(--ff-bold);
`

export const Telegram = styled.img`
  margin-left: 10px;
`

export const PhoneIcon = styled.img`
  margin-right: 10px;
`
export const LogoFooter = styled.img`
  margin-left: 80px;
  max-height: 40px;
`

export const InfoFooter = styled.img`
  margin-left: 20px;
`

export const LentaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`
