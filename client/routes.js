import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import app from './app'

export default [
  {
    ...app,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AboutPage,
        path: '/about',
      },
    ],
  },
]
