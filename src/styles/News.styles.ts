import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 150%;
  font-family: ${({ theme }) => theme.fonts.openSans};

  padding: 22px 0;

  h1 {
    margin-bottom: 10px;
  }
  img {
    display: block;
    object-fit: contain;
    max-width: 100%;

    padding: 12px 0;
    margin: 0 auto;

    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
    border-radius: 4px;
  }

  code {
    width: 100%;
    background: ${({ theme }) => theme.colors.gray[700]};
    color: ${({ theme }) => theme.colors.green[600]};
    font-weight: bold;
    padding: 0 12px;
  }

  a {
    color: ${({ theme }) => theme.colors.purple[500]};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => darken(0.3, theme.colors.purple[500])};
    }
  }

  h1,
  h2 {
    padding: 12px 0;
    text-transform: uppercase;
    margin-top: 22px;
  }
  h1 {
    line-height: 150%;
  }
`

export const Header = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 12px;

  strong {
    text-transform: uppercase;
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.cyan[500]};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors.cyan[300]};
    }
  }
`

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  max-width: 800px;
  margin: 32px auto;
  padding: 22px;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
    button {
      background: transparent;
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
  ul {
    width: 100%;
    margin-top: 22px;

    border-left: 1px solid ${({ theme }) => theme.colors.gray[100]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};

    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 0 22px;
  }
`
export const CardComment = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`

export const HeaderCardComment = styled.div`
  font-size: 14px;

  strong {
    background: ${({ theme }) => transparentize(0.9, theme.colors.cyan[500])};
    padding: 4px 12px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.cyan[500]};
    margin-right: 12px;
    font-style: italic;
  }
  span {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`

export const BodyCardComment = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[800]};
`
