import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 17, 17, 0.64);
  z-index: 1000;
`
interface ModalProps {
  children: ReactNode
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const ModalWindow: FC<ModalProps> = ({ children, onClick }) => {
  function closeByOverlay(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (evt.target === evt.currentTarget && onClick) return onClick(evt)
  }

  return <ModalBox onClick={closeByOverlay}>{children}</ModalBox>
}

export default ModalWindow
