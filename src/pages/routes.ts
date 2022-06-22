import { RouteConfig } from 'react-router-config'
import { paths } from './paths'
import { Home } from './Home'
import { Error } from './Error'

export const routes: RouteConfig[] = [
  {
    path: paths.home(),
    exact: true,
    component: Home,
  },
  {
    component: Error,
    exact: true,
  },
]
