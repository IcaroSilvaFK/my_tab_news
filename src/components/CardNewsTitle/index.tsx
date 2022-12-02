import { format } from 'date-fns'
import Link from 'next/link'

import { INewsContent } from '../../DTOs/NewsContents'

import { Container, Profile } from './styles'

export function CardNewsTitle(props: INewsContent) {
  const { created_at, owner_username, title, id, slug } = props
  const createdAt = format(new Date(created_at), 'dd/MM')

  return (
    <Link href={`/${owner_username}/${slug}`}>
      <a>
        <Container>
          <Profile>
            <span className="createdAt">{createdAt}</span>-
            <span className="owner">@{owner_username}</span>
          </Profile>
          <p>{title}</p>
        </Container>
      </a>
    </Link>
  )
}
