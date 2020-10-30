import { NextApiRequest } from 'next'
import Prismic from 'prismic-javascript'
import config from './config'
export default function client(
  req: NextApiRequest = null,
  accessToken: string = ''
) {
  return Prismic.client(config.api, {
    req: req ?? {},
    accessToken,
  })
}
