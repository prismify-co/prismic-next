import { PictureProps } from './picture'
import { AspectRatioProps, AspectRatio } from '@chakra-ui/core'
import Picture from './picture'

function AspectPicture({
  ratio,
  src,
  srcSet,
  srcSets,
  width,
  height,
  media,
  alt,
  ...rest
}: PictureProps & AspectRatioProps) {
  return (
    <AspectRatio ratio={ratio} {...(rest as any)}>
      <Picture {...{ src, srcSet, srcSets, width, height, media, alt }} />
    </AspectRatio>
  )
}

export default AspectPicture
