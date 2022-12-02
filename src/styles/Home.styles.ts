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
