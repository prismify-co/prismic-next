import linkResolver from './link-resolver'
type Link =
  | {
      link_type: 'Any'
    }
  | { link_type: 'Web'; url: string; target: string }
  | {
      link_type: 'Document'
      id: string
      type: string
      tags: string[]
      slug: string
      lang: string
      uid: string
      isBroken: boolean
    }

function linkParser(link?: Link) {
  if (link?.link_type === 'Any') {
    return { target: '_self', href: '#' }
  }

  if (link?.link_type === 'Web') {
    return { target: link.target, href: link.url }
  }

  if (link?.link_type === 'Document') {
    return { href: linkResolver(link) }
  }
}

export default linkParser
