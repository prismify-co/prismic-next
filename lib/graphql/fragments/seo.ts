import { gql } from "@apollo/client"
import { fragmentId } from "./slices"

export const seo = (type: "Page") => gql`
  fragment seo_open_graph${fragmentId(type)} on ${type + "Body1Open_graph"} {
    type
    label
    primary {
      og_title
      og_description
      og_url {
        ...document_link
        ...external_link
        ...file_link
        ...image_link
      }
      og_image
    }
  }

  fragment seo_twitter${fragmentId(type)} on ${type + "Body1Twitter"} {
    type
    label
    primary {
      tw_site
      tw_handle
      tw_card_type
    }
  }
`
