type PrismicDocument = {
  id: string
  type: string
  tags: string[]
  slug: string
  lang: string
  uid: string
  isBroken: boolean
}

function linkResolver(doc?: PrismicDocument) {
  if (!doc || doc === null) return '#'

  switch (doc.type) {
    case 'page':
      // return "/"
      return doc.uid === 'home' ? '/' : `/${doc.uid}`
    default:
      return '#'
  }
}

export default linkResolver
