import { Box } from 'theme-ui'
import { SpacerSliceProps } from 'types/site'

export default function SpacerSection(props: SpacerSliceProps) {
  return (
    <Box
      sx={{ py: props?.primary?.space ? `${props?.primary?.space}rem` : 3 }}
    />
  )
}
