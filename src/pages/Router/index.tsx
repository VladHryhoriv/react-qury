import { Home } from 'pages/Home'
import { paths } from 'pages/paths'
import { Route, Routes } from 'react-router'

export default function Router() {
  return (
    <Routes>
      <Route path={paths.home()} element={<Home />} />
    </Routes>
  )
}
