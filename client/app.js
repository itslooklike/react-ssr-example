import React from 'react'
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from './actions'
import Header from './components/header'

function App({ route }) {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}

const loadData = ({ dispatch }) => dispatch(fetchCurrentUser())

export default {
  component: App,
  loadData,
}
