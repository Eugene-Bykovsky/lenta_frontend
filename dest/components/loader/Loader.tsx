import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Sun = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffb900;
  position: relative;
`

const Ray = styled.div`
  position: absolute;
  width: 50px;
  height: 10px;
  background-color: #003c96;
  border-radius: 5px;
  transform-origin: bottom;
  animation: ${rotate} 5s linear infinite;

  &:nth-child(2) {
    transform: rotate(45deg);
  }
  &:nth-child(3) {
    transform: rotate(90deg);
  }
  &:nth-child(4) {
    transform: rotate(135deg);
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`

const SunLoader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Sun>
        <Ray style={{ top: '0', left: '20px' }} />
        <Ray
          style={{ top: '20px', left: '50px', transform: 'rotate(90deg)' }}
        />
        <Ray style={{ top: '50px', left: '20px' }} />
        <Ray
          style={{ top: '20px', left: '-10px', transform: 'rotate(90deg)' }}
        />
      </Sun>
    </LoaderWrapper>
  )
}

export default SunLoader
