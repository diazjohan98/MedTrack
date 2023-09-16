import React from 'react'
import ReactDOM from 'react-dom/client'
import { Emergency } from './modules/MedTrack/emergencia/Emergency'
import { Login } from './modules/MedTrack/login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Emergency /> */}
    <Login />
  </React.StrictMode>,
)
