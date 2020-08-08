import { RichText } from 'prismic-reactjs'
import Text from 'components/ui/text'
import htmlSerializer from 'utils/prismic/html-serializer'
import { TextProps } from 'theme-ui'

export type PrismicRichTextProps = TextProps & {
  text: IPrismicRichText
  asText?: boolean
}

function PrismicRichText({
  text,
  asText = false,
  ...props
}: PrismicRichTextProps) {
  if (asText) {
    return <Text {...(props as any)}>{RichText.asText(text ?? [])}</Text>
  }
  return (
    <RichText {...props} render={text ?? []} htmlSerializer={htmlSerializer} />
  )
}

export default PrismicRichText
