import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap'
import { createGzip } from 'zlib'
import Prismic from 'prismic-javascript'
import linkResolver from 'utils/prismic/link-resolver'
import config from 'utils/prismic/config'

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Set response header
  res.setHeader('content-type', 'application/xml')
  res.setHeader('Content-Encoding', 'gzip')

  // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
  // The readable stream it transforms must be in object mode.
  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  })

  const pipeline = stream.pipe(createGzip())

  return new Promise(async (resolve) => {
    const api = await Prismic.getApi(config.api, { req })
    const documents = await getPage(api, 1, [])
    try {
      documents.forEach((doc) => {
        stream.write({
          url: `${linkResolver(doc)}`,
          lastmod: doc.last_publication_date ?? '',
          changefreq: EnumChangefreq.WEEKLY,
        })
      })
      stream.end()

      // cache the response
      // streamToPromise.then(sm => sitemap = sm)
      streamToPromise(pipeline)
      // stream the response
      pipeline
        .pipe(res)
        .on('finish', () => resolve())
        .on('close', () => resolve())
        .on('error', (e) => {
          resolve()
          res.status(500).end()
        })
    } catch (error) {
      res.status(500).end()
    }
  })
}
