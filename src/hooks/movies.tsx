import React, { createContext, useState, useContext, useCallback } from 'react'
import api from '../services/api'

export interface Movie {
  poster_path: string
  title: string
  original_title: string
}

interface MoviesState {
  slug: string
  title: string
  endpoint: string
  items: {
    results: Movie[]
  }
}

interface MoviesContextData {
  movies: MoviesState[]
  loading: boolean
  loadMovies(): void
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MoviesState[]>([
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      endpoint: '/discover/tv?with_network=213',
      items: []
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      endpoint: '/trending/all/week',
      items: []
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      endpoint: '/movie/top_rated',
      items: []
    },
    {
      slug: 'action',
      title: 'Ação',
      endpoint: '/discover/movie?with_genres=28',
      items: []
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      endpoint: '/discover/movie?with_genres=35',
      items: []
    },
    {
      slug: 'horror',
      title: 'Terror',
      endpoint: '/discover/movie?with_genres=27',
      items: []
    },
    {
      slug: 'romance',
      title: 'Romance',
      endpoint: '/discover/movie?with_genres=10749',
      items: []
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      endpoint: '/discover/movie?with_genres=99',
      items: []
    }
  ])
  const [loading, setLoading] = useState(true)

  const fetch = useCallback(async (endpoint, slug) => {
    const { data } = await api.get(endpoint)

    setMovies(old =>
      old.map(cat => {
        if (cat.slug === slug) {
          cat.items = data
        }

        return cat
      })
    )
  }, [])

  const loadMovies = useCallback(() => {
    movies.map(async cat => {
      await fetch(cat.endpoint, cat.slug)
    })

    setLoading(false)
  }, [])

  return (
    <MoviesContext.Provider value={{ loadMovies, movies, loading }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies(): MoviesContextData {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMovies must be used whitin an MoviesProvider')
  }

  return context
}
