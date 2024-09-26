import { Actions, TabNode } from "flexlayout-react"
import { getMapComponent } from "./map"

export const componentFactory = (node: TabNode) => {
  const component: string = node.getComponent()!
  Actions.setActiveTabset(node.getParent()!.getId())
  return getMapComponent(component, node)
}