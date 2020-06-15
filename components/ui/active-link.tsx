/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { useRouter } from 'next/router'
import SmartLink, { SmartLinkProps } from './smart-link'

export type ActiveLinkProps = SmartLinkProps

const ActiveLink = ({ children, className, ...props }: ActiveLinkProps) => {
  const { asPath, pathname } = useRouter()
  const { href, as = '' } = props as any
  let active = false

  // We have a dynamic pathname
  if (/\[.+\]/gi.test(pathname) && as) {
    active = pathname === href && asPath === as
  } else {
    active = pathname === href
  }

  return (
    <SmartLink
      css={(props) => css`
        color: ${!active ? props?.colors?.text : props?.colors?.secondary};
        display: 'inline-block';
        font-weight: 700;
        border-bottom: none;
        &:hover {
          color: ${props?.colors?.secondary};
        }
      `}
      {...props}
    >
      {children}
    </SmartLink>
  )
}

export default ActiveLink
