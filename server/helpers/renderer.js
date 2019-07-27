import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from '../../client/routes'

export default function renderer(location, store) {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={{}}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const html = `
<html>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.client.js"></script>
  </body>
</html>
  `.trim()

  return html
}
