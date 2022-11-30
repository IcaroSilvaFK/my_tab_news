import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'

type User = {
  username: string
  bio: string
  avatar_url: string
}

interface IUseUser {
  user: null | User
  setUser: (user: User) => void
}

export const useUser = create<IUseUser>()(
  persist(
    devtools(
      (set) => ({
        user: null,
        setUser(user) {
          set((state) => ({ ...state, user }))
        },
      }),
      {
        name: '@user',
      }
    )
  )
)
