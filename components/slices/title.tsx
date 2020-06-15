import { TitleSliceProps } from "types/site"
import PrismicRichText from "components/prismic/prismic-rich-text"

export default function TitleSection({ primary }: TitleSliceProps) {
  return <PrismicRichText text={primary?.title} />
}
