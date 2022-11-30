import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ShimmerPostDetails } from 'react-shimmer-effects'
import { FiGithub } from 'react-icons/fi'

import { newsContents } from '../services/http/newsContents'
import { INewsContent } from '../DTOs/NewsContents'

import { Container, Content, Header, Profile, Body, Input } from '../styles/Home.styles'
import { CardNewsTitle } from '../components/CardNewsTitle'
import { useUser } from '../store/user'
import { FormEvent, useRef } from 'react'
import { githubApi } from '../configs/global/axios'

const Home: NextPage = () => {
  const { data, isLoading, isError } = useQuery<INewsContent[]>(['@NEWSCONTENTS'], newsContents)
  const { setUser, user } = useUser((state) => state)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement | null>(null)

  if (isError) {
    router.push('/404')
  }

  async function handleSearchUser(e: FormEvent) {
    try {
      e.preventDefault()
      const value = inputRef.current?.value
      const { data: userGithub } = await githubApi.get<IUserGithub>(`/${value}`)
      console.log({ userGithub })
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

  return (
    <>
      <Head>
        <title>Icaro Vieira</title>
      </Head>
      <Container>
        <Profile>
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
        </Profile>
        <Content>
          <Header>
            <h1>dev.to</h1>
          </Header>
          <Body>
            {isLoading && (
              <div>
                <ShimmerPostDetails card cta variant="SIMPLE" />
                <ShimmerPostDetails card cta variant="EDITOR" />
              </div>
            )}
            <ul>
              {data?.map((post) => (
                <CardNewsTitle key={post.id} {...post} />
              ))}
            </ul>
          </Body>
        </Content>
      </Container>
    </>
  )
}

export default Home
