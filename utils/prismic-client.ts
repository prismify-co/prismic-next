import Prismic from 'prismic-javascript'
import { PRISMIC_API_TOKEN, PRISMIC_API_URL } from 'lib/constants'
export default Prismic.client(PRISMIC_API_URL, {
  accessToken: PRISMIC_API_TOKEN,
})
