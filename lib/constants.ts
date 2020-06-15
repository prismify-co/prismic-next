export const PRISMIC_REPOSITORY_NAME =
  process.env.PRISMIC_REPOSITORY_NAME || "prismify-prismic-next"
export const PRISMIC_GRAPHQL_API_URL = `https://${PRISMIC_REPOSITORY_NAME}.prismic.io/graphql`
export const PRISMIC_API_URL = `https://${PRISMIC_REPOSITORY_NAME}.prismic.io/api/v2`
export const PRISMIC_API_TOKEN = process.env.PRISMIC_API_TOKEN
