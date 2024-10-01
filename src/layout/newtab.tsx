import { BorderNode, ITabSetRenderValues, TabSetNode } from "flexlayout-react"
import LayoutManager from "./manager"
import star from '../assets/star.svg'
import plus from '../assets/plus.svg'

function addNewTab(node: TabSetNode | BorderNode) {
  LayoutManager.getLayoutRef().current!.addTabToTabSet(node.getId(), {
    icon: star,
    component: "newtab",
    name: "New Tab"
  })
}

export const newTabButton = (node: (TabSetNode | BorderNode), renderValues: ITabSetRenderValues) => {
  if (node instanceof TabSetNode) {
    renderValues.stickyButtons.push(
      <div className="flexlayout__tab_toolbar_sticky_button" key={`new-tab-${node.getId()}`}>
        <img style={{ width: 10 }} onClick={() => addNewTab(node)} src={plus} alt="" />
      </div>
    )
  }
}