import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ShimmerPostDetails } from 'react-shimmer-effects'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { newsContents } from '../services/http/newsContents'
import { INewsContent } from '../DTOs/NewsContents'
import { CardNewsTitle } from '../components/CardNewsTitle'

import { Header } from '../styles/Home.styles'
import { Layout } from '../layout'

const Home: NextPage = () => {
  const { data, isLoading, isError } = useQuery<INewsContent[]>(['@NEWSCONTENTS'], newsContents)
  const router = useRouter()
  const [parentRef] = useAutoAnimate<HTMLUListElement>()

  if (isError) {
    router.push('/404')
  }

  return (
    <>
      <Head>
        <title>Icaro Vieira</title>
      </Head>
      <Layout>
        <Header>
          <h1>dev.to</h1>
        </Header>
        {isLoading && (
          <div>
            <ShimmerPostDetails card cta variant="SIMPLE" />
            <ShimmerPostDetails card cta variant="EDITOR" />
          </div>
        )}
        <ul ref={parentRef}>
          {data?.map((post) => (
            <CardNewsTitle key={post.id} {...post} />
          ))}
        </ul>
      </Layout>
    </>
  )
}

export default Home
