import React from 'react'
import ReactDOM from 'react-dom'
import { EverTrueApp, store } from './components/Client/App'
import { Provider } from 'react-redux'
import registerServiceWorker from './components/Client/registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <EverTrueApp />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
