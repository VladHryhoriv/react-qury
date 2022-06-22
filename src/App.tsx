import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Routing from 'pages/Router'

const Application: FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Routing />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}
export default hot(Application)
