import { Box } from '@chakra-ui/react'

export type SpacerSectionProps = {
  primary: {
    space?: number
  }
}

export default function SpacerSection(props: SpacerSectionProps) {
  return <Box py={props?.primary?.space ? `${props?.primary?.space}` : 3} />
}
