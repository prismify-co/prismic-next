import { TextSliceProps } from 'types/site'
import PrismicRichText from 'components/prismic/prismic-rich-text'

export default function TextSection({ primary }: TextSliceProps) {
  return <PrismicRichText text={primary?.text} />
}
