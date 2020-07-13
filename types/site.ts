export type PrismicDocument = IPrismicMeta<'page' | string>

export type OpenGraphProps = IPrismicSlice<
  'open_graph',
  {
    og_title: IPrismicKeyText
    og_description: IPrismicKeyText
    og_url: IPrismicLink
    og_image: IPrismicImage<'sm' | 'md' | 'lg'>
  }
>

export type TwitterProps = IPrismicSlice<
  'twitter',
  {
    tw_site: IPrismicKeyText
    tw_handle: IPrismicKeyText
    tw_card_type: IPrismicSelect<'Summary' | 'Summary Large Image'>
  }
>

export interface PageProps {
  meta_title: IPrismicKeyText
  meta_description: IPrismicKeyText
  meta_canonical: IPrismicKeyText

  seo: [OpenGraphProps | TwitterProps, OpenGraphProps | TwitterProps]
  slices: IPrismicSlice<string>[]
}

export type TitleSliceProps = IPrismicSlice<
  'title',
  {
    title?: IPrismicRichText
  }
>

export type TextSliceProps = IPrismicSlice<
  'text',
  {
    text?: IPrismicRichText
  }
>

export type ImageSliceProps = IPrismicSlice<
  'image',
  {
    image?: IPrismicImage<'sm'> & IPrismicImage<'md'> & IPrismicImage<'lg'>
    image_link?: IPrismicLink
    image_description?: IPrismicRichText
  },
  never,
  'with_link'
>

export type SpacerSliceProps = IPrismicSlice<
  'spacer',
  {
    space?: string
  }
>

export type SliceProps = TextSliceProps | ImageSliceProps | SpacerSliceProps
