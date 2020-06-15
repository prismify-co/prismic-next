import {
  Heading as ThemeUIHeading,
  HeadingProps as ThemeUIHeadingProps,
  css,
} from 'theme-ui'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import toSlug from 'react-slugify'

export type HeadingProps = ThemeUIHeadingProps & {
  slugify?: boolean
}

function Heading({ slugify = true, ...props }: HeadingProps) {
  const slug = slugify ? toSlug(props.children) : ''
  const InternalHeading = styled(ThemeUIHeading)(
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
    }),
    variant({
      variants: {
        h1: {
          variant: 'styles.heading',
          fontSize: 'calc(1em * 1.250 * 1.250 * 1.250)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em * 1.250 * 1.250 * 1.250 * 1.250)',
          },
          fontWeight: 700,
        },
        h2: {
          variant: 'styles.heading',
          fontSize: 'calc(1em * 1.250 * 1.250)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em * 1.250 * 1.250 * 1.250)',
          },
          fontWeight: 700,
        },
        h3: {
          fontSize: 'calc(1em * 1.250)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em * 1.250 * 1.250)',
          },
          variant: 'styles.heading',
          fontWeight: 700,
        },
        h4: {
          fontSize: 'calc(1em)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em * 1.250)',
          },
          variant: 'styles.heading',
          fontWeight: 700,
        },
        h5: {
          fontSize: 'calc(1em * 1.250 / 1.250)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em)',
          },
          variant: 'styles.heading',
          fontWeight: 700,
        },
        h6: {
          fontSize: 'calc(1em * 1.250 / 1.250 / 1.250)',
          '@media(min-width: 600px)': {
            fontSize: 'calc(1em * 1.250 / 1.250)',
          },
          variant: 'styles.heading',
          fontWeight: 700,
        },
      },
    })
  )
  return <InternalHeading {...props} id={props.id ?? slug ?? ''} />
}

export default Heading
