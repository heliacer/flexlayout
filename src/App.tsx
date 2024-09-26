import { Layout, Model } from 'flexlayout-react'
import { LayoutJsonModel } from './layout/config'
import { newTabButton } from './layout/newtab'
import { componentFactory } from './layout/factory'
import LayoutManager from './layout/manager'

function App() {
  return (
    <>
      <Layout
        ref={LayoutManager.getLayoutRef()}
        realtimeResize
        model={Model.fromJson(LayoutJsonModel)}
        factory={componentFactory}
        onRenderTabSet={newTabButton}
      />
    </>
  )
}

export default App
