/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import { merge } from "theme-ui"
import { future } from "@theme-ui/presets"

const theme = merge(future, {
  breakpoints: [
    // sm => @media (min-width: 640px) { ... }
    "640px",
    // md => @media (min-width: 768px) { ... }
    "768px",
    // lg => @media (min-width: 1024px) { ... }
    "1024px",
    // xl => @media (min-width: 1280px) { ... }
    "1280px",
    // 2xl => @media (min-width: 1920px) { ... }
    "1920px",
  ],
  layout: {
    container: {
      maxWidth: ["100%", null, null, "1100px"],
      mx: "auto",
      px: [3, null, null, "auto"],
    },
  },
})

export default {
  ...theme,
  mq: {
    sm: (prop) =>
      css`
        @media (min-width: 640px) {
          ${prop}
        }
      `,
    md: (prop) =>
      css`
        @media (min-width: 768px) {
          ${prop}
        }
      `,
    lg: (prop) =>
      css`
        @media (min-width: 1024px) {
          ${prop}
        }
      `,
    xl: (prop) =>
      css`
        @media (min-width: 1280px) {
          ${prop}
        }
      `,
    "2xl": (prop) =>
      css`
        @media (min-width: 1920px) {
          ${prop}
        }
      `,
  },
}
