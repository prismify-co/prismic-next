import {
  Heading as ThemeUIHeading,
  HeadingProps as ThemeUIHeadingProps,
  css,
} from '@chakra-ui/core'
import styled from '@emotion/styled'
import toSlug from 'react-slugify'

export type HeadingProps = ThemeUIHeadingProps & {
  slugify?: boolean
}

function Heading({ slugify = true, ...props }: HeadingProps) {
  let slug = slugify ? toSlug(props.children) : ''
  if (slug[slug.length - 1] === '-') {
    slug = slug.slice(0, slug.length - 2)
  }
  const InternalHeading = styled(ThemeUIHeading)`
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
  return <InternalHeading {...props} id={props.id ?? slug ?? ''} />
}

export default Heading
