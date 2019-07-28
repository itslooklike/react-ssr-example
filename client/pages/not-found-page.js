import React from 'react'

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true
  return <h1>Ooops! Not Found</h1>
}

export default {
  component: NotFoundPage,
}
