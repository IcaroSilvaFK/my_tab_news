import { transparentize, darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.cyan[500]};
      border-radius: 10px;
    }
  }
`

export const Profile = styled.div`
  flex: 1;
  max-width: 450px;
  background: ${({ theme }) => theme.colors.gray[100]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.cyan[500]};
    font-style: italic;
    font-weight: 500;
  }
  > div {
    display: flex;
    align-items: flex-start;
    margin-top: 30px;
    gap: 20px;
    padding: 0 20px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        font-weight: 500;
        font-style: italic;
      }
      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  }
  form {
    width: 90%;
    display: flex;
    align-items: center;
    margin-top: 22px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 60px;
      height: 100%;
      background: ${transparentize(0.8, '#9be1f8')};
      margin-left: 2px;
      border-radius: 4px;
      &:hover {
        background: ${darken(0.1, '#9be1f8')};
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: none;
    padding: 22px;
  }
`

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 22px;

  &::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.cyan[500]};
    border-radius: 10px;
  }

  ul {
    a {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    overflow-y: unset;
    padding: 0;
  }
`

export const Header = styled.header`
  padding: 22px 40px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.indie};
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
`

export const Body = styled.div``

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.cyan[500]};
  flex: 1;
`
