import styled, { css } from 'styled-components'
import { transparentize, darken } from 'polished'

interface IContainerProps {
  isNewsTab?: boolean
}

export const Container = styled.div<IContainerProps>`
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

  ${({ isNewsTab }) =>
    isNewsTab &&
    css`
      @media screen and (max-width: 800px) {
        width: 100%;
        max-width: none;
        padding: 22px;
      }
    `}

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: none;
    padding: 22px;
  }
`

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.cyan[500]};
  flex: 1;
`
