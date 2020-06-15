import { ThemeProvider } from "theme-ui"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "lib/graphql/apollo"
import theme from "styles/theme"

// Styles
import "styles/base.css"

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
