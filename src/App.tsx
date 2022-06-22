import { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { routes } from 'pages/routes'

const Application: FC = () => {
  return renderRoutes(routes)
}

export default hot(Application)
