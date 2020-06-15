import { gql } from "@apollo/client"

export const common = () => gql`
  fragment page_link on Page {
    meta: _meta {
      ...meta
    }
  }
`
