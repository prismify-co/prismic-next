import linkResolver from "./link-resolver"
import whitelist from "./whitelist"
import hrefResolver from "./href-resolver"
type Link = {
  url?: string
  href?: string
  target: string
  rel: string
  as?: string
  shallow?: boolean
  passHref?: boolean
}

function linkParser(link?: IPrismicLink | string): Link {
  if (!link || link === null) {
    return { url: "#", target: "", rel: "noopener", as: "", href: "" }
  }

  if (typeof link === "string") {
    return applyNextProps(
      applyTarget(
        applyRel(
          normalizeAnchors({
            url: link ?? "",
            target: "",
            rel: "noopener",
          }),
          whitelist
        )
      )
    )
  }

  if ("url" in link) {
    return applyHref(
      applyNextProps(
        applyTarget(
          applyRel(
            normalizeAnchors({
              url: link?.url ?? "#",
              target: "__blank",
              rel: "noopener",
            }),
            whitelist
          )
        )
      )
    )
  }

  if ("type" in link) {
    return applyHref(
      applyNextProps(
        applyTarget(
          applyRel(
            normalizeAnchors({
              href: hrefResolver(link),
              target: "",
              rel: "noopener",
              as: linkResolver(link),
            }),
            whitelist
          )
        )
      )
    )
  }

  if ("meta" in link) {
    return applyHref(
      applyNextProps(
        applyTarget(
          applyRel(
            normalizeAnchors({
              href: hrefResolver(link?.meta),
              target: "",
              rel: "noopener",
              as: linkResolver(link?.meta),
            }),
            whitelist
          )
        )
      )
    )
  }
  return { url: "#", target: "", rel: "noopener", as: "", href: "" }
}

/**
 * Normalizes anchors from url strings
 */
function normalizeAnchors({ url, href, ...rest }: Link): Link {
  if (url === "#") {
    return { url, href, ...rest }
  }
  const s = url ?? href ?? ""

  if (s?.includes("#")) {
    if (s.match(/https?:\/\/#/gi) || url.match(/matsuyacreative\.com/gi)) {
      return {
        url: url?.replace(/https?:\/\/|www\.|matsuyacreative\.com/gi, ""),
        href: href?.replace(/https?:\/\/|www\.|matsuyacreative\.com/gi, ""),
        ...rest,
      }
    }
  }
  return { url, href, ...rest }
}
/**
 * Determines whether `rel` should have a follow or nofollow
 * and automatically applies the correct type
 */
function applyRel(
  { url, target, rel, href, ...rest }: Link,
  list: RegExp[] = [],
  mode: "white" | "black" = "white"
): Link {
  const s = url ?? href ?? ""
  if ((/^\//.test(s) && /#/gi.test(s)) || list.length === 0) {
    return { url, href, target, rel, ...rest }
  }

  switch (mode) {
    case "white":
      for (const item of list) {
        if (item.test(s)) {
          return { url, href, target, rel: `${rel} follow`, ...rest }
        }
      }
    case "black":
      for (const item of list) {
        if (item.test(s)) {
          return { url, href, target, rel: `${rel} nofollow`, ...rest }
        }
      }
    default:
      return { url, href, target, rel: `${rel} nofollow`, ...rest }
  }
}

/**
 * Determines whether `target` should be `__blank` or not
 * and automatically applies the correct type
 */
function applyTarget({ url, href, target, ...rest }: Link): Link {
  const s = url ?? href ?? ""

  if (s?.match(/https?/gi)) {
    return { url, href, target: "__blank", ...rest }
  }

  return { url, href, target, ...rest }
}

function applyNextProps({ href, as, ...rest }: Link): Link {
  if (href && as) {
    if (as === "/articles" || as === "/comics") {
      return {
        href: as,
        as,
        ...rest,
        shallow: false,
        passHref: true,
      }
    }
  }
  return {
    href,
    as,
    ...rest,
    shallow: false,
    passHref: true,
  }
}

function applyHref({ href, url, ...rest }: Link): Link {
  if (url && !href) {
    return { href: url, url, ...rest }
  }
  return { href, url, ...rest }
}

export default linkParser
