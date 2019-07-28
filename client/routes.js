// import React from 'react'
// import { Route } from 'react-router-dom'

import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'

// export default function Routes() {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </div>
//   )
// }

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...AboutPage,
    path: '/about',
  },
]
