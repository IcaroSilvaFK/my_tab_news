import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  p {
    font-size: 18px;
    margin-top: 12px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .owner {
    font-weight: 500;
    font-style: italic;
  }
  .createdAt {
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-left: 8px;
  }
`
