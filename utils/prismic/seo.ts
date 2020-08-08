import merge from 'lodash/merge'
import { OpenGraphProps, TwitterProps } from 'types/site'

type OpenGraph = {
  type: string
  title: string
  description: string
  images: any[]
  url: string
  site_name: string
}

function og(slice: OpenGraphProps, og: OpenGraph): Partial<OpenGraph> {
  const { og_title, og_description, og_image, og_url } = slice.primary
  return {
    type: 'website',
    title: og_title || og?.title,
    description: og_description || og?.description,
    images: [
      {
        url: og_image?.url || '',
        width: og_image?.dimensions?.width ?? 0,
        height: og_image?.dimensions?.height ?? 0,
      },
    ],
    url: (og_url as IPrismicExternalLink)?.url || (og_url as any),
  }
}

type Twitter = {
  site: string
  handle: string
  card_type: string
}

function tw(slice: TwitterProps, og: Partial<Twitter>): Twitter {
  return {
    site: slice.primary.tw_site || og?.site,
    handle: slice.primary.tw_handle || og?.handle,
    card_type:
      slice.primary.tw_card_type || og?.card_type
        ? slice.primary.tw_card_type.toLowerCase()
        : undefined,
  }
}

export default function seo(
  title: string,
  description: string,
  canonical: string,
  slices?: Array<OpenGraphProps | TwitterProps>,
  twitter: Partial<Twitter> = {}
) {
  let url, image
  let openGraph: any = { title, description, url, image }

  const openGraphSlice = slices?.find(
    (slice) => slice.type === 'open_graph'
  ) as OpenGraphProps
  const twitterSlice = slices?.find(
    (slice) => slice.type === 'twitter'
  ) as TwitterProps

  if (openGraphSlice) {
    openGraph = merge({}, openGraph, og(openGraphSlice, openGraph))
  }

  if (twitterSlice) {
    twitter = merge({}, twitter, tw(twitterSlice, twitter))
  }

  return { title, description, canonical, openGraph, twitter }
}
