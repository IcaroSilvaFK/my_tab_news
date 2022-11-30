import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../configs/global/react-query'
import { theme } from '../styles/theme/index'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
