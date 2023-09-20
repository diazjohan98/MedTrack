import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../modules/MedTrack/login/Login'
import { Medicamento } from '../modules/MedTrack/medicamento/Medicamento'
import { Registrarse } from '../modules/MedTrack/registro/Registrarse'
import { AppLaunche } from '../modules/MedTrack/appLaunche/AppLaunche'
import { UserPAge } from '../modules/MedTrack/user/UserPAge'
import { Graficos } from '../modules/MedTrack/graficos/Graficos'
import { Perfil } from '../modules/MedTrack/perfil/Perfil'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Dashboard } from '../modules/MedTrack/dashboard/Dashboard'
import { Emergency } from '../modules/MedTrack/emergencia/Emergency'
import "./css/Routes.css"

export const MedTrackRoutes = () => {
  return (
    <div className="containerRoutes">
        <Routes>
            {/* <Route path='appLauncher' element={} /> */}
            <Route path='appLaunche' element={<AppLaunche /> } />
            <Route path='login' element={<Login /> } />
            <Route path='registrarse' element={<Registrarse /> } />
            <Route path='dashboard' element={<Dashboard /> } />
            <Route path='medicamento' element={<Medicamento /> } />
            <Route path='user' element={<UserPAge /> } />
            <Route path='graficos' element={<Graficos /> } />
            <Route path='perfil' element={<Perfil /> } />
            <Route path='sidebar' element={<Sidebar /> } />
            <Route path='emergency' element={<Emergency /> } />

            <Route path='/' element={<Navigate to="/appLaunche" />} />

        </Routes>
        
    </div>
  )
}
