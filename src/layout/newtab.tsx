import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BorderNode, ITabSetRenderValues, TabSetNode } from "flexlayout-react"
import LayoutManager from "./manager"

function addNewTab(node: TabSetNode | BorderNode) {
  LayoutManager.getLayoutRef().current!.addTabToTabSet(node.getId(), {
    icon: "/tabicons/star.svg",
    component: "newtab",
    name: "New Tab"
  })
}

export const newTabButton = (node: (TabSetNode | BorderNode), renderValues: ITabSetRenderValues) => {
  if (node instanceof TabSetNode) {
    renderValues.stickyButtons.push(
      <div className="flexlayout__tab_toolbar_sticky_button" key={`new-tab-${node.getId()}`}>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => { addNewTab(node) }}
          size="xs"
        />
      </div>
    )
  }
}