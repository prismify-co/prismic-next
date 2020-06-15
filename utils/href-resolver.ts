import { PrismicDocument } from "types/site"

export default function hrefResolver(doc: PrismicDocument) {
  if (!doc || doc === null) return ""

  switch (doc.type) {
    case "page":
      return "/"
    // return doc.uid === "home" ? "/" : "/[uid]"
    default:
      return ""
  }
}
