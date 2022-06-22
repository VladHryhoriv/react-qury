import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import Application from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
// Style
import './assets/style/index.scss'

const App: FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Application />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
