import { SliceProps } from 'types/site'
import Text from 'components/slices/text'
import Title from 'components/slices/title'
import Spacer from 'components/slices/spacer'

export default function slicer(slices: SliceProps[]) {
  return slices.map((slice, index) => {
    switch (slice.type) {
      case 'title':
        return (
          <Title
            {...(slice as any)}
            key={`slice-${index}`}
            id={`slice-${index}`}
          />
        )
      case 'text':
        return (
          <Text
            {...(slice as any)}
            key={`slice-${index}`}
            id={`slice-${index}`}
          />
        )
      case 'spacer':
        return (
          <Spacer
            {...(slice as any)}
            key={`slice-${index}`}
            id={`slice-${index}`}
          />
        )
      default:
        break
    }
    return <></>
  })
}

/**
 * A dynamic version of slicer. However, this does not appear in "View page source".
 */

// import dynamic from "next/dynamic"
// import slugify from "react-slugify"

// export default function slicer(component: any, index: number) {
//   try {
//     const componentName = slugify(component.type)
//     const Component = dynamic<{
//       id: string
//       key: string
//       primary: any
//       fields: any[]
//       label?: string
//     }>(import(`../components/slices/${componentName}`))
//     return (
//       <Component
//         id={`slice-${index}`}
//         key={`slice-${index}`}
//         primary={component.primary}
//         fields={component.fields}
//         label={component.label}
//       />
//     )
//   } catch (e) {
//     console.error(e)
//     return <div key={`slice-${index}`}></div>
//   }
// }
