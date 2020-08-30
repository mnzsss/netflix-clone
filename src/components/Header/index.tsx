import React from 'react'

import NetflixLogo from '../../assets/logo.svg'

import { Container, User } from './styles'

interface Props {
  background: boolean
}

const Home: React.FC<Props> = ({ background }) => {
  return (
    <Container background={background}>
      <a href="/">
        <NetflixLogo />
      </a>

      <User>
        <img
          src="https://api.adorable.io/avatars/134/place.png"
          alt="Usuário"
        />
      </User>
    </Container>
  )
}

export default Home
