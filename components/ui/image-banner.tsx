/**@jsx jsx */
import { jsx, AspectRatio } from '@chakra-ui/core'
import { forwardRef, Ref } from 'react'
import Picture, { PictureProps } from './picture'

export type ImageBannerProps = Omit<PictureProps, 'ref'> & {
  keepAspectRatio?: boolean
  ratio?: number
}

const ImageBanner = forwardRef<
  Omit<HTMLPictureElement, 'ref'>,
  ImageBannerProps
>(({ ...props }, ref) =>
  props.keepAspectRatio ? (
    <AspectRatio
      ratio={props.ratio || 32 / 15}
      sx={{
        height: props.height ||
          (props?.sx as any)?.height || ['335px', '500px'],
      }}
    >
      <Picture
        ref={ref}
        {...props}
        sx={{
          ...props.sx,
          width: '100%',
          objectFit: 'cover',
          objectPosition: '50% 20%',
        }}
      />
    </AspectRatio>
  ) : (
    <Picture
      ref={ref}
      {...props}
      sx={{
        ...props.sx,
        width: '100%',
        objectFit: 'cover',
        height: ['335px', '500px'],
        objectPosition: ['50% 30%', '50% 50%'],
      }}
    />
  )
)

export default ImageBanner
