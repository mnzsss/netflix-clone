import React, { useMemo } from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import Truncate from 'react-truncate'

import { Movie } from '../../hooks/movies'

import { Container } from './styles'

interface Props {
  item: Movie
}

const Spotlight: React.FC<Props> = ({ item }) => {
  const parsedYear = useMemo(
    () => new Date(item.first_air_date).getFullYear(),
    [item.first_air_date]
  )

  return (
    <Container
      background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
    >
      <div className="backdrop-effect">
        <div className="backdrop-effect-infos">
          <h1>{item.original_name}</h1>

          <div className="infos">
            <div className="points">{item.vote_average} pontos</div>
            <div className="year">{parsedYear}</div>
            <div className="seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </div>

          <Truncate lines={2}>{item.overview}</Truncate>

          <div className="buttons">
            <a href={`/watch/${item.id}`} className="watch">
              <FaPlay />
              Assistir
            </a>
            <a href={`/list/add/${item.id}`}>
              <MdAdd />
              Minha Lista
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Spotlight
