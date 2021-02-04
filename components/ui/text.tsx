import { Text as ChakraText } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Text = styled(ChakraText)`
  &.capitalize {
    text-transform: capitalize;
  }
  &.uppercase {
    text-transform: uppercase;
  }

  &.lowercase {
    text-transform: lowercase;
  }

  &.text-left {
    text-transform: left;
  }

  &.text-right {
    text-transform: right;
  }

  &.text-center {
    text-transform: center;
  }
`
export default Text
