import React from 'react'
import styled from 'styled-components'
import { Telegram } from '../Icons/Telegram'

const TelegramButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const TelegramLink = () => {
  const openTelegram = () => {
    window.open('https://t.me/LENTAcompany_bot', '_blank')
  }

  return (
    <TelegramButton onClick={openTelegram}>
      <Telegram />
    </TelegramButton>
  )
}

export default TelegramLink
