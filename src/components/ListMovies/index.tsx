import React from 'react'

import { Movie as MovieProps } from '../../hooks/movies'

import { Container, ListContainer, List, Movie } from './styles'

interface Props {
  title: string
  items: {
    results: MovieProps[]
  }
}

const ListMovies: React.FC<Props> = ({ title, items }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <ListContainer>
        <List>
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
