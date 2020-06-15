import { forwardRef } from 'react'
import Picture, { PictureProps } from './picture'
import { AvatarProps } from 'theme-ui'
type AvatarPictureProps = AvatarProps & PictureProps

const AvatarPicture = forwardRef<HTMLPictureElement, AvatarPictureProps>(
  ({ size = 48, ...props }, ref) => {
    return (
      <Picture
        ref={ref as any}
        width={size}
        height={size}
        {...props}
        sx={{
          borderRadius: '50%',
          ...props.sx,
        }}
      />
    )
  }
)

export default AvatarPicture
