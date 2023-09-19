import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../modules/MedTrack/login/Login'
import { Medicamento } from '../modules/MedTrack/medicamento/Medicamento'
import { Registrarse } from '../modules/MedTrack/registro/Registrarse'
import { AppLaunche } from '../modules/MedTrack/appLaunche/AppLaunche'

export const MedTrackRoutes = () => {
  return (
    <div className="containerRoutes">
        <Routes>
            {/* <Route path='appLauncher' element={} /> */}
            <Route path='appLaunche' element={<AppLaunche /> } />
            <Route path='login' element={<Login /> } />
            <Route path='medicamento' element={<Medicamento /> } />
            <Route path='registrarse' element={<Registrarse /> } />

            <Route path='/' element={<Navigate to="/appLaunche" />} />

        </Routes>
        
    </div>
  )
}
