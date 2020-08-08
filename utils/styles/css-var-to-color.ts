import { parseToRgb, rgbToColorString } from "polished"

export default function cssVarToColor(string: string) {
  if (/^#/.test(string)) {
    return string
  }

  if (/hsl/gi.test(string)) {
    const matches = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g.exec(
      string
    )
    if (matches?.length > 0) {
      return rgbToColorString(parseToRgb(matches[0]))
    }
  }

  if (/#/gi.test(string)) {
    const matches = /#([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g.exec(
      string
    )
    if (matches?.length > 0) {
      return matches[0]
    }
  }
  return ""
}
