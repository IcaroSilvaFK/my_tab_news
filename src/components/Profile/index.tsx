import { FormEvent, useRef, useState, useEffect } from 'react'
import { FiGithub } from 'react-icons/fi'
import { githubApi } from '../../configs/global/axios'
import { useUser } from '../../store/user'
import { Container, Input } from './styles'

interface IProfileProps {
  isNewsTab?: boolean
}

export function Profile({ isNewsTab }: IProfileProps) {
  const { setUser, user } = useUser((state) => state)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    setIsRendered(true)
  }, [])

  async function handleSearchUser(e: FormEvent) {
    try {
      e.preventDefault()
      const value = inputRef.current?.value
      const { data: userGithub } = await githubApi.get<IUserGithub>(`/${value}`)

      if (userGithub) {
        setUser({
          avatar_url: userGithub.avatar_url,
          bio: userGithub.bio,
          username: userGithub.login,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!isRendered) {
    return null
  }

  return (
    <Container isNewsTab={isNewsTab}>
      <span>Learning is constant and there will always be a next level</span>
      {!user ? (
        <form onSubmit={handleSearchUser}>
          <Input type="text" placeholder="Digite seu usuário do github" ref={inputRef} />
          <button>
            <FiGithub size={22} />
          </button>
        </form>
      ) : (
        <div>
          <img src={user.avatar_url} alt={user.username} />
          <div>
            <span>@{user.username}</span>
            <p>{user.bio}</p>
          </div>
        </div>
      )}
    </Container>
  )
}
