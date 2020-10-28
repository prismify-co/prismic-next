import { ImageSliceProps } from 'types/site'

import { Box } from '@chakra-ui/core'
import linkParser from 'utils/prismic/link-parser'
import Picture from 'components/ui/picture'
import SmartLink from 'components/ui/smart-link'

export default function ImageSection(props: ImageSliceProps) {
  const { primary, label } = props
  const { image, image_link, image_description } = primary
  const img = (
    <Picture
      src={image?.url}
      srcSets={[
        { src: image?.sm?.url, media: '(max-width: 700px)' },
        { src: image?.md?.url, media: '(max-width: 900px)' },
        { src: image?.lg?.url, media: '(max-width: 1500px)' },
      ]}
    />
  )
  if (label === 'with_link') {
    return (
      <Box sx={{ maxWidth: '550px', width: '100%', mx: 'auto', my: 4 }}>
        <SmartLink variant="borderless" {...linkParser(image_link)}>
          {img}
        </SmartLink>
      </Box>
    )
  }

  return (
    <Box sx={{ maxWidth: '550px', width: '100%', mx: 'auto', my: 4 }}>
      {img}
    </Box>
  )
}
