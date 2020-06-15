import { Box } from 'theme-ui'
import styled from '@emotion/styled'
import css from '@styled-system/css'

const BaseSpan = (props) => <Box as="span" {...props} />

const Span = styled(BaseSpan)(
  css({
    '&.capitalize': {
      textTransform: 'capitalize',
    },
    '&.uppercase': {
      textTransform: 'uppercase',
    },
    '&.lowercase': {
      textTransform: 'lowercase',
    },
    '&.text-left': {
      textAlign: 'left',
    },
    '&.text-right': {
      textAlign: 'right',
    },
    '&.text-center': {
      textAlign: 'center',
    },
  })
)

export default Span
