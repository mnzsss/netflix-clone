import React from 'react'

import { Container } from './styles'

interface Props {
  data: {
    slug: string
    title: string
    items: []
  }
}

const ListMovies: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <h1>{data.title}</h1>
    </Container>
  )
}

export default ListMovies
