import styled from '@emotion/styled'
import { variant } from 'styled-system'
import { css } from 'theme-ui'

const Header = styled('header')`
  border-top: 2px solid ${(props: any) => props.theme.colors.text};
  position: relative;

  ${variant({
    variants: {
      borderless: {
        border: 'none',
      },
    },
  })}
`
export default Header
