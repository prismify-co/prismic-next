import { gql } from "@apollo/client"

type DocumentType = "Page"

export const spacer = (type: DocumentType) => gql`
  fragment spacer${fragmentId(type)} on ${type + "BodySpacer"} {
    type
    label
    primary {
      space
    }
  }
`

export const title = (type: DocumentType) => gql`
  fragment title${fragmentId(type)} on ${type + "BodyTitle"} {
    type
    label
    primary {
      title
    }
  }
`

export const text = (type: DocumentType) => gql`
  fragment text${fragmentId(type)} on ${type + "BodyText"} {
    type
    label
    primary {
      text
    }
  }
`

export const image = (type: DocumentType) => gql`
  fragment image${fragmentId(type)} on ${type + "BodyImage"} {
    type
    label
    primary {
      image
      image_link {
        ...document_link
        ...external_link
        ...file_link
        ...image_link
      }
    }
  }
`

export function fragmentId(type: "Page") {
  if (type === "Page") return ""
  if (type === "Comic") return "1"
  return "2"
}
