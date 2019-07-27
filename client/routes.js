// import React from 'react'
// import { Route } from 'react-router-dom'

import Home, { loadData } from './home'
import About from './about'

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
    path: '/',
    component: Home,
    exact: true,
    loadData,
  },
  {
    path: '/about',
    component: About,
  },
]
