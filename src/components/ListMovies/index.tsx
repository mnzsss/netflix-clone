import React, { useCallback, useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

import { Movie as MovieProps } from '../../hooks/movies'

import {
  Container,
  ListContainer,
  List,
  Movie,
  LeftControl,
  RightControl
} from './styles'

interface Props {
  title: string
  items: {
    results: MovieProps[]
  }
}

const ListMovies: React.FC<Props> = ({ title, items }) => {
  const [scrollList, setScrollList] = useState(0)

  const handleNextMovies = useCallback(() => {
    let x = scrollList + Math.round(window.innerWidth / 2)

    if (x > 0) {
      x = 0
    }

    setScrollList(x)
  }, [scrollList])

  const handlePreviousMovies = useCallback(() => {
    let x = scrollList - Math.round(window.innerWidth / 2)
    const listWidth = items.results.length * 200

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 80
    }

    setScrollList(x)
  }, [items.results.length, scrollList])

  return (
    <Container>
      <h2>{title}</h2>

      <LeftControl onClick={handleNextMovies}>
        <MdNavigateBefore size={50} color="#fff" />
      </LeftControl>

      <RightControl onClick={handlePreviousMovies}>
        <MdNavigateNext size={50} color="#fff" />
      </RightControl>

      <ListContainer>
        <List scrollList={scrollList} widthTotal={items.results.length * 200}>
          {items.results?.length >= 0 &&
            items.results?.map((movie, key) => (
              <Movie key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Movie>
            ))}
        </List>
      </ListContainer>
    </Container>
  )
}

export default ListMovies
