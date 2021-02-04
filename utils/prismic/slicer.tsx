import { SliceProps } from 'types/site'
import { Title, Text, Spacer } from 'components/slices'

export default function slicer(slices: SliceProps[]) {
  return slices.map((slice, index) => {
    const props = { ...slice, key: `slice-${index}`, id: `slice-${index}` }
    switch (slice.slice_type) {
      case 'title':
        return <Title {...(props as any)} />
      case 'text':
        return <Text {...(props as any)} />
      case 'spacer':
        return <Spacer {...(props as any)} />
      default:
        break
    }
    return undefined
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
