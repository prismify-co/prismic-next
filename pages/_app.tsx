import { ChakraProvider } from '@chakra-ui/react'

// Styles
import 'styles/base.css'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
