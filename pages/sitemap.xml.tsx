import React from 'react'
import Prismic from 'prismic-javascript'
import config from 'utils/prismic/config'
import linkResolver from 'utils/prismic/link-resolver'
// recursively fetch all pages
function getPage(api, page, documents = []): Array<any> {
  return api
    .query(Prismic.Predicates.any('document.type', ['page']), {
      page,
      pageSize: 100,
      fetch: [],
    })
    .then((response) => {
      if (response.next_page !== null) {
        return getPage(api, page + 1, documents.concat(response.results))
      }
      return documents.concat(response.results)
    })
}

const createSitemap = (
  hostname: string,
  documents: Array<{ url: string; lastmod: string }>
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${documents
          .map(({ url, lastmod }) => {
            return `
                    <url>
                        <loc>${`${hostname}${url}`}</loc>
                        <lastmod>${lastmod}</lastmod>
                    </url>
                `
          })
          .join('')}
    </urlset>
    `

export default class Sitemap extends React.Component {
  static async getInitialProps({ res, req }) {
    res?.setHeader('content-type', 'application/xml')
    const api = await Prismic.getApi(config.api, { req })
    const documents = await getPage(api, 1, [])
    const hostname = `https://${req.headers.host}`
    res.write(
      createSitemap(
        hostname,
        documents.map((doc) => ({
          url: linkResolver(doc),
          lastmod: doc.last_publication_date ?? '',
        }))
      )
    )
    res.end()
  }
}
