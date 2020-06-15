import { gql } from "@apollo/client"
import {
  common,
  prismic,
  seo,
  spacer,
  text,
  image,
  externalLink,
  documentLink,
  fileLink,
  imageLink,
  title,
} from "../fragments"

export const pageQuery = () => gql`
  query page($slug: String!) {
    page(uid: $slug, lang: "en-us") {
      meta_title
      meta_description
      meta_canonical
      seo: body1 {
        ...seo_open_graph
        ...seo_twitter
      }

      slices: body {
        ...title
        ...text
        ...image
        ...spacer
      }
    }
  }

  ${externalLink()}
  ${documentLink()}
  ${fileLink()}
  ${imageLink()}
  ${seo("Page")}
  ${spacer("Page")}
  ${title("Page")}
  ${text("Page")}
  ${image("Page")}
`
