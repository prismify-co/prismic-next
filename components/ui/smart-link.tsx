import Link, { LinkProps } from "./link"
import NextLink, { NextLinkProps } from "components/ui/next-link"

export type SmartLinkProps = LinkProps | NextLinkProps

const SmartLink = (props: SmartLinkProps) => {
  if (props.href?.charAt(0) === "/" || !!(props as NextLinkProps).as) {
    return <NextLink {...(props as NextLinkProps)} />
  }

  return <Link {...(props as LinkProps)} />
}

export default SmartLink
