import ImageBanner, { ImageBannerProps } from './image-banner'
import { Container } from 'theme-ui'
import { ReactNode } from 'react'
import Heading from './heading'
import SmartLink from './smart-link'

type HeroProps = {
  title?: string
  image: ImageBannerProps
  imageLink?: {
    url?: string
    href?: string
    as?: string
    rel?: string
    alt?: string
    target?: string
  }
  children?: ReactNode
  id?: string
}

function Hero({ title, image, imageLink, children = [], ...props }: HeroProps) {
  const img = <ImageBanner {...image} />
  const component =
    !imageLink?.href || imageLink.href === '#' ? (
      img
    ) : (
      <SmartLink is="a" {...imageLink} variant="borderless">
        <ImageBanner {...image} />
      </SmartLink>
    )
  return (
    <section>
      {title !== '' ? (
        <Heading
          className="uppercase"
          as="h1"
          variant="h1"
          id={props?.id ?? ''}
          sx={{ textAlign: 'center', my: '1rem' }}
        >
          {title}
        </Heading>
      ) : null}

      {component}
      <Container>{children}</Container>
    </section>
  )
}

export default Hero
