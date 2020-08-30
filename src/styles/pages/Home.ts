import styled from 'styled-components'

export const Container = styled.main`
  .lists {
    margin-top: -150px;
  }

  footer {
    margin: 50px 0;
    text-align: center;
    line-height: 1.4;
  }
`

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`
