import { Button as ThemeUIButton } from 'theme-ui'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import css from '@styled-system/css'

const Button = styled(ThemeUIButton)(
  css({
    cursor: 'pointer',
    fontSize: 0,
    textTransform: 'uppercase',
    '&.block': {
      width: ['100%', '100%', 'initial'],
      display: 'block',
    },
  }),
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'primary',
        bg: 'primary',
      },
      secondary: {
        color: 'primary',
        bg: 'secondary',
      },
    },
  })
)
export default Button
