import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Movie, useMovies } from '../hooks/movies'

import { ListMovies, Spotlight, Header } from '../components'

import { Container, Loading } from '../styles/pages/Home'
import api from '../services/api'

const Home: NextPage = () => {
  const { movies } = useMovies()

  const [loading, setLoading] = useState(true)
  const [backgroundHeader, setBackgroundHeader] = useState(false)
  const [spotlightMovie, setSpotlightMovie] = useState<Movie>({} as Movie)

  useEffect(() => {
    async function getSpotlight() {
      const originals = movies.find(item => item.slug === 'originals')
      const randomChosen = Math.floor(
        Math.random() * originals.items.results.length - 1
      )

      const choseMovie = originals.items.results[randomChosen]

      if (choseMovie) {
        const { data } = await api.get(`tv/${choseMovie.id}`)
        setSpotlightMovie(data)
      }
    }

    getSpotlight()

    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [movies])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {
        setBackgroundHeader(true)
      } else {
        setBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      {loading && (
        <Loading>
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif"
            alt="Carregando..."
          />
        </Loading>
      )}

      <Container>
        <Header background={backgroundHeader} />

        <Spotlight item={spotlightMovie} />

        <div className="lists">
          {movies.map((item, key) => (
            <ListMovies title={item.title} items={item.items} key={key} />
          ))}
        </div>

        <footer>
          <p>
            Feito com{' '}
            <span role="img" aria-label="Coração">
              ♥️
            </span>{' '}
            por Gabriel Menezes
          </p>
          <p>Direitos de Imagem para Netflix</p>
          <p>Dados pegos do site Themoviedb.org</p>
        </footer>
      </Container>
    </>
  )
}

export default Home
