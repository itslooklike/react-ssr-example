import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

import reducers from './reducers'
import routes from './routes'

const fetcher = axios.create({ baseURL: '/api' })

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(fetcher))
)

if (window.INITIAL_STATE) delete window.INITIAL_STATE

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
