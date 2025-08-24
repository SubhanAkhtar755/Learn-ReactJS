

import HomePage from './pages/home'
import Shop from './pages/shop'
import store from './store'
import {Provider} from 'react-redux'
import Routers from "./config/router"
function App() {
  return (
  <Provider store={store}>
   <Routers />
    </Provider>
  )
}

export default App
