import {
  Link as ThemeUILink,
  LinkProps as ThemeUILinkProps,
} from '@chakra-ui/core'
import { ElementType, forwardRef } from 'react'
import styled from '@emotion/styled'

export type LinkProps = Omit<ThemeUILinkProps, 'as'> & {
  is?: ElementType
}

const BaseLink = styled(ThemeUILink)()

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { is = 'a', ...props }: LinkProps,
  ref
) {
  if ('shallow' in props) {
    delete (props as any).shallow
  }
  if ('passHref' in props) {
    delete (props as any).passHref
  }
  return <BaseLink ref={ref} {...props} as={is} />
})

export default Link
