import React from 'react'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '../../client/routes'

export default function renderer(location, store, context) {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const html = `
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="bundle.client.js"></script>
  </body>
</html>
  `.trim()

  return html
}
