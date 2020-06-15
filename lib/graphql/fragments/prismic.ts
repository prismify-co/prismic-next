import { gql } from '@apollo/client'

export const meta = () => {
  return gql`
    fragment meta on Meta {
      id
      uid
      type
      tags
      lang
      published: firstPublicationDate
      updated: lastPublicationDate
    }
  `
}

export const documentLink = () => gql`
  fragment document_link on _Document {
    meta: _meta {
      ... on Meta {
        id
        uid
        type
        tags
        lang
        published: firstPublicationDate
        updated: lastPublicationDate
      }
    }
  }
`

export const externalLink = () => gql`
  fragment external_link on _ExternalLink {
    url
  }
`

export const fileLink = () => gql`
  fragment file_link on _FileLink {
    name
    url
    size
  }
`

export const imageLink = () => gql`
  fragment image_link on _ImageLink {
    name
    url
    size
    width
  }
`

export const prismic = () => gql`
  # Meta data
  ${meta()}

  # Link
  ${externalLink()}
  ${documentLink()}
  ${fileLink()}
  ${imageLink()}
`
