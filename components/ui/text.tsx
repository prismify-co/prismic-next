// import { Text } from 'theme-ui'
import styled from '@emotion/styled'
import css from '@styled-system/css'

const Text = styled('p')(
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
export default Text
