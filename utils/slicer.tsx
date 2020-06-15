import dynamic from "next/dynamic"
import slugify from "react-slugify"

export default function slicer(component: any, index: number) {
  try {
    const componentName = slugify(component.type)
    const Component = dynamic<{
      id: string
      key: string
      primary: any
      fields: any[]
      label?: string
    }>(import(`../components/slices/${componentName}`))
    return (
      <Component
        id={`slice-${index}`}
        key={`slice-${index}`}
        primary={component.primary}
        fields={component.fields}
        label={component.label}
      />
    )
  } catch (e) {
    console.error(e)
    return <div key={`slice-${index}`}></div>
  }
}
