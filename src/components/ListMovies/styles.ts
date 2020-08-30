import styled from 'styled-components'

interface ListProps {
  scrollList: number
  widthTotal: number
}

export const Container = styled.div`
  margin-bottom: 20px;
  position: relative;

  h2 {
    margin: 0 0 0 60px;

    @media (max-width: 760px) {
      margin: 0 0 0 30px;
    }
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  button {
    border: 0;
    background: transparent;
    position: absolute;
    width: 60px;
    height: 90%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #14141499;
    opacity: 0;
    transition: opacity ease 0.4s;
  }

  @media (max-width: 760px) {
    button {
      opacity: 1;
    }
  }
`

export const ListContainer = styled.div`
  overflow-x: hidden;
  padding-left: 60px;

  @media (max-width: 760px) {
    padding-left: 30px;
  }
`

export const List = styled.div<ListProps>`
  width: ${({ widthTotal }) => `${widthTotal}px`};
  margin-left: ${({ scrollList }) => `${scrollList}px`};
  transition: all ease 0.4s;
`

export const Movie = styled.div`
  display: inline-block;
  width: 200px;
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    transform: scale(0.9);
    transition: transform ease-in-out 0.2s;
  }

  &:hover {
    img {
      transform: scale(1);
    }
  }
`

export const LeftControl = styled.button`
  left: 0;
`

export const RightControl = styled.button`
  right: 0;
`
