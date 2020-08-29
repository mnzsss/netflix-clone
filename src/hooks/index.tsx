import React from 'react'

import { MoviesProvider } from './movies'

const AppProvider: React.FC = ({ children }) => (
  <MoviesProvider>{children}</MoviesProvider>
)

export default AppProvider
