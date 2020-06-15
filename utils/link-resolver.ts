import { PrismicDocument } from "types/site"

export default function linkResolver(doc?: PrismicDocument) {
  if (!doc || doc === null) return "#"

  switch (doc.type) {
    case "page":
      return "/"
    // return doc.uid === "home" ? "/" : `/${doc.uid}`
    default:
      return "#"
  }
}
