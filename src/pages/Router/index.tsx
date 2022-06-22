import { ErrorPage } from 'pages/Error'
import { Home } from 'pages/Home'
import { paths } from 'pages/paths'
import { useRoutes } from 'react-router'

export default function Router() {
  const routes = useRoutes([
    {
      path: paths.home(),
      element: <Home />,
    },
    {
      element: <ErrorPage />,
    },
  ])
  return routes
}
