import styled, { css } from 'styled-components'

interface IContainerProps {
  isNewsTab?: boolean
}

export const Container = styled.main<IContainerProps>`
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

  ${({ isNewsTab }) =>
    isNewsTab &&
    css`
      @media screen and (max-width: 800px) {
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
    `}
`

export const Content = styled.div<IContainerProps>`
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

  ${({ isNewsTab }) =>
    isNewsTab &&
    css`
      @media screen and (max-width: 800px) {
        overflow-y: unset;
        padding: 0;
        margin-top: 22px;
        padding: 0 22px;
      }
    `}

  @media screen and (max-width: 500px) {
    overflow-y: unset;
    padding: 0;
  }
`
