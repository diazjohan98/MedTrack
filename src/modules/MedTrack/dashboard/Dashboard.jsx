import { Sidebar } from "../../../components/sidebar/Sidebar"
import imgLogoPrincipal from '../../../assets/img/LogoCompletoMedTrack.png'
import './css/dashboardStyle.css'

export const Dashboard = () => {
  return (
    <div className="containerDashboard">
        <Sidebar />
       <img className="imgLogoprincipalDashboard" src={imgLogoPrincipal} alt="" />
    </div>
  )
}
