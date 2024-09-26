import { TabNode } from "flexlayout-react"

const componentsMap: Record<string, JSX.Element | null> = {
  /* Add components here */
}

export const getMapComponent = (component: string, node: TabNode): JSX.Element => {
  return componentsMap[component] || (
    <div className="m-1 opacity-50">
      Component: {component}<br />
      Id: {node.getId()}<br /><br />
    </div>
  )
}
