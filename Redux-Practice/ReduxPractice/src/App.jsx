

import HomePage from './pages/home'
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
  <Provider store={store}>
    <HomePage />
    </Provider>
  )
}

export default App
