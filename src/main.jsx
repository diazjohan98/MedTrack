import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<<<< Temporary merge branch 1
import { Graficos } from './modules/MedTrack/graficos/Graficos'
//import { Perfil } from './modules/MedTrack/perfil/Perfil'
=========

// import { Login } from './modules/MedTrack/login/Login.jsx'
// import { Registrarse } from './modules/MedTrack/registro/Registrarse'

import { Perfil } from './modules/MedTrack/perfil/Perfil'
>>>>>>>>> Temporary merge branch 2
//import { Emergency } from './modules/MedTrack/emergencia/Emergency'
//import { Login } from './modules/MedTrack/login/Login.jsx'
//import { Registrarse } from './modules/MedTrack/registro/Registrarse'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<<<< Temporary merge branch 1
    <Graficos></Graficos>
=========

    {/* <Login /> */}
    {/* <Registrarse/>
   */}
    <Perfil />

>>>>>>>>> Temporary merge branch 2
  </React.StrictMode>,
)

