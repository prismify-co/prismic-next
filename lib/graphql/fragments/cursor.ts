import { gql } from '@apollo/client'

export const cursor = () => gql`
  # Graphql cursor

  fragment cursor on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`
