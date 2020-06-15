import { ImageProps as ThemeUIImageProps, Image } from 'theme-ui'
import { forwardRef, Ref } from 'react'

type ImageProps = Omit<ThemeUIImageProps, 'ref'> & { media?: string }

export interface PictureProps extends ImageProps {
  srcSets?: ImageProps[]
}

const Picture = forwardRef<HTMLPictureElement | HTMLImageElement, PictureProps>(
  ({ srcSets = [], ...props }, ref) => {
    if (srcSets.length === 0) {
      return <Image ref={ref as Ref<HTMLImageElement>} {...props} />
    }
    return (
      <picture ref={ref as Ref<HTMLPictureElement>}>
        {srcSets.map((image, key) => {
          const { src, srcSet, media, ...rest } = image

          if (src || srcSet) {
            return (
              <source
                key={key}
                media={media}
                srcSet={src || srcSet}
                {...(rest as any)}
              />
            )
          }
          return null
        })}
        <Image ref={ref as Ref<HTMLImageElement>} {...props} />
      </picture>
    )
  }
)

export default Picture
