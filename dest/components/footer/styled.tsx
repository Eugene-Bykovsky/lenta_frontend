import styled from 'styled-components'

// export const LogoFooter = styled(logo)``

export const FooterDiv = styled.footer`
  max-width: 1920px;
  height: 136px;
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
  margin-top: 10px;
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
  // align-items: center;

  div {
    margin: 0 0 0 30px;
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #e1e1e1;
  }

  // p {
  //   margin-bottom: 5px;
  //   color: #e1e1e1;
  // }
`
