import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Login } from './modules/MedTrack/login/Login.jsx'
import { Registrarse } from './modules/MedTrack/registro/Registrarse'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Registrarse/>
  </React.StrictMode>,
)
