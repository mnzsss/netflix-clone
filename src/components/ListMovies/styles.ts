import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;

  h2 {
    margin: 0 0 0 60px;
  }
`

export const ListContainer = styled.div`
  overflow-x: hidden;
  padding-left: 60px;
`

export const List = styled.div`
  width: 9999999px;
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
