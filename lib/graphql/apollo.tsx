import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"
import {
  PRISMIC_GRAPHQL_API_URL,
  PRISMIC_API_TOKEN,
  PRISMIC_REPOSITORY_NAME,
} from "../constants"
import { useMemo } from "react"

let apolloClient

function createApolloClient(previewData) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: PrismicLink({
      uri: PRISMIC_GRAPHQL_API_URL,
      accessToken: PRISMIC_API_TOKEN,
      previewRef: previewData?.ref,
    }),
    cache: new InMemoryCache(),
  })
}

export function initApolloClient(
  initialState = null,
  previewData
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(previewData)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState = {}, previewData = {}) {
  return useMemo(() => initApolloClient(initialState, previewData), [
    initialState,
  ])
}
