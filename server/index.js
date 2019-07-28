import '@babel/polyfill'

import express from 'express'
import morgan from 'morgan'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import routes from '../client/routes'
import renderer from './helpers/renderer'
import createStore from './helpers/create-store'

const port = 3000

const proxyOptions = {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  },
}

const app = express()

app.use(morgan('tiny'))

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', proxyOptions))

app.use(express.static('build'))

app.get('*', (req, res) => {
  const { path } = req
  const store = createStore(req.get('cookie') || '')
  const promises = matchRoutes(routes, path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  )

  Promise.all(promises)
    .then(() => {
      const context = {}
      const content = renderer(path, store, context)

      if (context.notFound) {
        res.status(404)
      }

      res.send(content)
    })
    .catch(error => console.log(error))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
