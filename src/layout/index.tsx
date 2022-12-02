import { ReactNode } from 'react'
import { Profile } from '../components/Profile'
import { Container, Content } from './styles'

interface ILayoutProps {
  children: ReactNode
  isNewsTab?: boolean
}

export function Layout({ children, isNewsTab }: ILayoutProps) {
  return (
    <Container isNewsTab={isNewsTab}>
      <Profile isNewsTab={isNewsTab} />
      <Content isNewsTab={isNewsTab}>{children}</Content>
    </Container>
  )
}
