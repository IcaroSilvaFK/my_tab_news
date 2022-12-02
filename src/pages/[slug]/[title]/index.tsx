import type { NextPage } from 'next'
import { renderToStaticMarkup } from 'react-dom/server'
import { Viewer } from '@bytemd/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiArrowSmLeft } from 'react-icons/hi'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ShimmerPostDetails } from 'react-shimmer-effects'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { newContent } from '../../../services/http/newsContents'
import { INewsOneContent } from '../../../DTOs/NewsContents'
import gfmPlugin from '@bytemd/plugin-gfm'
import highlightSsrPlugin from '@bytemd/plugin-highlight-ssr'
import mermaidPlugin from '@bytemd/plugin-mermaid'
import breaksPlugin from '@bytemd/plugin-breaks'
import gemojiPlugin from '@bytemd/plugin-gemoji'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  Body,
  BodyCardComment,
  CardComment,
  Container,
  Footer,
  Header,
  HeaderCardComment,
} from '../../../styles/News.styles'
import { Layout } from '../../../layout'
import { format } from 'date-fns'

const page: NextPage = () => {
  const bytemdPluginList = [
    gfmPlugin(),
    highlightSsrPlugin(),
    mermaidPlugin(),
    breaksPlugin(),
    gemojiPlugin(),
  ]
  const { query, push } = useRouter()
  const { slug, title } = query
  const [news, setNews] = useState<INewsOneContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [parentListAnimation] = useAutoAnimate<HTMLUListElement>()
  const [parentFooterAnimation] = useAutoAnimate<HTMLDivElement>()
  const [isOpenComments, setIsOpenComments] = useState(false)
  const [comments, setComments] = useState<INewsOneContent[] | null>(null)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await newContent<INewsOneContent>(`/${slug}/${title}`)
      const comments = await newContent<INewsOneContent[]>(`/${slug}/${title}/children`)

      const body = renderToStaticMarkup(
        <Viewer value={response.body} plugins={bytemdPluginList} />
      ).replace(/[\r\n]/gm, '')

      setNews({ ...response, body })
      setComments(comments)
      setIsLoading(false)
    })()
  }, [slug, title])

  function handleNavigateToHome() {
    push('/')
  }

  function handleToggleComments() {
    setIsOpenComments((prev) => !prev)
  }

  return (
    <Layout isNewsTab>
      <Container>
        {isLoading ? (
          <ShimmerPostDetails card cta variant="SIMPLE" />
        ) : (
          <>
            <Header>
              <button onClick={handleNavigateToHome}>
                <HiArrowSmLeft size={25} />
              </button>
              <div>
                <strong>Autor: </strong>
                <span>@{news?.owner_username}</span>
              </div>
            </Header>
            <Body>
              <h1>{news?.title}</h1>
              {news && <div dangerouslySetInnerHTML={{ __html: news.body }} />}
            </Body>
            <Footer ref={parentFooterAnimation}>
              {comments && comments?.length > 0 && (
                <div>
                  <span>Comentários</span>
                  <button onClick={handleToggleComments}>
                    {!isOpenComments ? (
                      <MdKeyboardArrowDown size={28} />
                    ) : (
                      <MdOutlineKeyboardArrowUp size={28} />
                    )}
                  </button>
                </div>
              )}

              {isOpenComments && (
                <ul ref={parentListAnimation}>
                  {comments?.map((comment) => (
                    <CardComment key={comment.owner_id}>
                      <HeaderCardComment>
                        <strong>@{comment.owner_username}</strong>
                        <span>{format(new Date(comment.created_at), 'dd/MM')}</span>
                      </HeaderCardComment>
                      <BodyCardComment>
                        <p>{comment.body}</p>
                      </BodyCardComment>
                    </CardComment>
                  ))}
                </ul>
              )}
            </Footer>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default page
