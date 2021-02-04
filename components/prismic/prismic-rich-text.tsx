import { RichText } from 'prismic-reactjs'
import { TextProps } from '@chakra-ui/react'
import serializer from 'utils/prismic/html-serializer'
import Text from 'components/ui/text'

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
  return <RichText {...props} render={text ?? []} htmlSerializer={serializer} />
}

export default PrismicRichText
