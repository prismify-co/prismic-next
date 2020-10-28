const repository =
  process.env.PRISMIC_REPOSITORY_NAME || 'prismify-prismic-next'
const api = `https://${repository}.cdn.prismic.io/api/v2`
const graphql = `https://${repository}.prismic.io/graphql`
const token = process.env.PRISMIC_API_TOKEN

export default {
  repository,
  api,
  graphql,
  token,
}
