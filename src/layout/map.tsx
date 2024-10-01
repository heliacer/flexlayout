import { TabNode } from "flexlayout-react"

const componentsMap: Record<string, JSX.Element | null> = {
  /* Add components here */
}

export const getMapComponent = (component: string, node: TabNode): JSX.Element => {
  return componentsMap[component] || (
    <div style={{ margin: 10, opacity: 0.5 }}>
      Component: {component}<br />
      Id: {node.getId()}<br /><br />
    </div>
  )
}
