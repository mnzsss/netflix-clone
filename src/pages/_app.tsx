import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import AppProvider from '../hooks'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
