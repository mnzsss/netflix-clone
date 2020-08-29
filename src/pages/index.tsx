import { NextPage } from 'next'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { useMovies } from '../hooks/movies'

import ListMovies from '../components/ListMovies'

import { Container, Header } from '../styles/pages/Home'

const Home: NextPage = () => {
  const { movies, loadMovies } = useMovies()

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
      <Head>
        <title>React JS Config</title>
      </Head>

      <Container>
        <Header>
          {movies.map((item, key) => (
            <ListMovies data={item} key={key} />
          ))}
        </Header>
      </Container>
    </>
  )
}

export default Home
