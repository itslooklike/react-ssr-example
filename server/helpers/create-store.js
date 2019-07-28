import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from '../../client/reducers'

export default function(cookie) {
  const fetcher = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie },
  })

  const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument(fetcher)))
  return store
}
