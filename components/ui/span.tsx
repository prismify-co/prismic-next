import { Box } from '@chakra-ui/core'
import styled from '@emotion/styled'

const BaseSpan = (props) => <Box as="span" {...props} />

const Span = styled(BaseSpan)`
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

export default Span
