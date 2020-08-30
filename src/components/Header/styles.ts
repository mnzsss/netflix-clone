import styled from 'styled-components'

interface ContainerProps {
  background: boolean
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  transition: all ease 0.3s;
  background: ${({ background }) =>
    background ? 'rgba(12,12,12,0.9)' : 'transparent'};

  svg {
    width: auto;
    height: 40px;
  }

  @media (max-width: 760px) {
    padding: 0 30px;
  }
`

export const User = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 4px;
    cursor: pointer;
  }
`
