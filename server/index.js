import '@babel/polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import routes from '../client/routes'
import renderer from './helpers/renderer'
import createStore from './helpers/create-store'

const port = 3000

const app = express()
app.use(express.static('build'))

app.get('*', (req, response) => {
  const { path } = req
  const store = createStore()
  const promises = matchRoutes(routes, path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  )

  Promise.all(promises)
    .then(() => response.send(renderer(path, store)))
    .catch(err => console.log(err))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
