import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ModalWindow from '../modal/ModalWindow'
import { ButtonConfirmExl } from '../UI/button/ButtonUI'
import { ButtonWrapper } from '../UI/button/styled'
import { ExitCross } from '../UI/Icons/ExitCross'

export const Container = styled.div`
  position: relative;
  width: 636px;
  height: 415px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  background: var(--color-white);
  border-radius: 16px;

  svg {
    position: absolute;
    top: 10%;
    right: 10%;
    cursor: pointer;
  }
`

export const Header = styled.h1`
  margin: 0;
  font-family: var(--ff-bold);
  font-weight: var(--fw-800);
  font-size: var(--fs-24);
  line-height: var(--line-height-32);
`

export const Message = styled.p`
  margin: 0;
  font-weight: var(--fw-400);
  font-size: var(--fs-16);
  line-height: var(--line-height-24);
`

export const ExlDownLoad: FC = () => {
  const navigate = useNavigate()
  const handleCloseModal = () => {
    navigate('/forecast')
  }

  useEffect(() => {
    function closeModalByEscape(evt: KeyboardEvent) {
      evt.stopPropagation()
      if (evt.key === 'Escape') {
        handleCloseModal()
      }
    }

    document.addEventListener('keydown', closeModalByEscape)
    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [handleCloseModal])

  return (
    <ModalWindow onClick={handleCloseModal}>
      <Container>
        <ButtonWrapper onClick={handleCloseModal}>
          <ExitCross />
        </ButtonWrapper>

        <Header>Успешно!</Header>
        <Message>Отчёт загружен.</Message>

        <ButtonConfirmExl onClick={handleCloseModal} />
      </Container>
    </ModalWindow>
  )
}
