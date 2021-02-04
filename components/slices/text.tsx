import PrismicRichText from 'components/prismic/prismic-rich-text'

export type TextSectionProps = {
  primary: {
    text: IPrismicRichText
  }
}

export default function TextSection({ primary }: TextSectionProps) {
  return <PrismicRichText text={primary?.text} />
}
