import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
// import App from './App.jsx'
import './index.css'
import { Login } from './modules/MedTrack/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
=======
import { Emergency } from './modules/MedTrack/emergencia/Emergency'
import { Login } from './modules/MedTrack/login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Emergency /> */}
>>>>>>> 3bdcc79e66daa5389262a7a334fac9f04469124a
    <Login />
  </React.StrictMode>,
)
