import React from 'react'
import ReactDOM from 'react-dom'
import { EverTrueApp, store } from './client/App'
import { Provider } from 'react-redux'
import registerServiceWorker from './client/registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <EverTrueApp />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
