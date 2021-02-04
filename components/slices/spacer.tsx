import { Box } from '@chakra-ui/react'
import { SpacerSliceProps } from 'types/site'

export default function SpacerSection(props: SpacerSliceProps) {
  return <Box py={props?.primary?.space ? `${props?.primary?.space}` : 3} />
}
