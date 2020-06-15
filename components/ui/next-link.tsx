import NativeNextLink, { LinkProps as NativeNextLinkProps } from 'next/link'
import Link, { LinkProps } from './link'

export type NextLinkProps = NativeNextLinkProps & LinkProps

function NextLink({
  as,
  href,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  ...props
}: NextLinkProps) {
  return (
    <>
      <NativeNextLink
        {...{ as, href, replace, scroll, shallow, passHref, prefetch }}
      >
        <Link {...props} />
      </NativeNextLink>
    </>
  )
}

export default NextLink
