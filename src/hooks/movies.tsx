import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from 'react'
import api from '../services/api'

export interface Movie {
  id: number
  vote_average: number
  number_of_seasons: number
  poster_path: string
  first_air_date: string
  title: string
  original_title: string
  backdrop_path: string
  original_name: string
  overview: string
  genre_ids: number[]
  genres: [{ name: string }]
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
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MoviesState[]>([
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      endpoint: '/discover/tv?with_network=213',
      items: { results: [] }
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      endpoint: '/trending/all/week',
      items: { results: [] }
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      endpoint: '/movie/top_rated',
      items: { results: [] }
    },
    {
      slug: 'action',
      title: 'Ação',
      endpoint: '/discover/movie?with_genres=28',
      items: { results: [] }
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      endpoint: '/discover/movie?with_genres=35',
      items: { results: [] }
    },
    {
      slug: 'horror',
      title: 'Terror',
      endpoint: '/discover/movie?with_genres=27',
      items: { results: [] }
    },
    {
      slug: 'romance',
      title: 'Romance',
      endpoint: '/discover/movie?with_genres=10749',
      items: { results: [] }
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      endpoint: '/discover/movie?with_genres=99',
      items: { results: [] }
    }
  ])

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
  }, [fetch, movies])

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <MoviesContext.Provider value={{ movies }}>
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
