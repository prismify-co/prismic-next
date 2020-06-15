import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui"
import { darken } from "polished"
import { ElementType, forwardRef } from "react"
import cssVarToColor from "utils/css-var-to-color"
import { variant } from "styled-system"
import styled from "@emotion/styled"

export type LinkProps = Omit<ThemeUILinkProps, "as"> & {
  is?: ElementType
}

const BaseLink = styled(ThemeUILink)(
  variant({
    variants: {
      initial: {
        border: "none",
        ":hover": {
          color: "text",
        },
      },
      borderless: {
        border: "none",
      },
    },
  })
)

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function (
  { is = "a", ...props }: LinkProps,
  ref
) {
  return (
    <BaseLink
      ref={ref}
      {...props}
      as={is}
      sx={{
        p: 0,
        borderBottom: (theme) => `1px solid ${theme.colors.secondary}`,
        color: "secondary",
        ":hover": {
          borderBottom: "none",
          color: (theme) => darken(0.3, cssVarToColor(theme.colors.secondary)),
        },
        cursor: "pointer",
        transition:
          "color 0.2s ease 0s, background-color 0.1s ease 0s, fill 0.1s ease 0s, border 0.1s ease 0s",
        textDecoration: "none",
        ...props.sx,
      }}
    />
  )
})

export default Link
