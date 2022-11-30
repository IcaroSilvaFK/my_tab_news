import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  logger: {
    log: (message) => {
      console.log(message)
    },
    warn: (warn) => {
      console.warn(warn)
    },
    error: (error) => {
      console.error(error)
    },
  },
})
