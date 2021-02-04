import PrismicRichText from 'components/prismic/prismic-rich-text'

export type TitleSectionProps = {
  primary: {
    title: IPrismicRichText
  }
}
export default function TitleSection({ primary }: TitleSectionProps) {
  return <PrismicRichText text={primary?.title} />
}
