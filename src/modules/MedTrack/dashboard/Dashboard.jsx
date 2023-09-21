import { Sidebar } from "../../../components/sidebar/Sidebar"
import imgLogoPrincipal from '../../../assets/img/LogoCompletoMedTrack.png'
import './css/dashboardStyle.css'
import vectorPNG from '../../../assets/img/Vector.png'
import { GiPill } from 'react-icons/gi';
import { BiSolidEdit } from 'react-icons/bi';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



const medicamentosItem = ["medicamento 1", "medicamento 2", "medicamento 3","medicamento 4",];

export const Dashboard = () => {
  
  const navigte = useNavigate()

  const handleSubmitMedicamento = () =>{
    navigte('/medicamento')
  }
  return (
    <div className="containerDashboard">
      <Sidebar />
      <div className="containerDashboardRecordatorio mx-5">
        <img className="imgLogoprincipalDashboard " src={imgLogoPrincipal} alt="" />

        <div className="titleContainer mx-3">
          <img src={vectorPNG} alt="" className='mx-1' />
          <p className='titleMedicamentos'>Recordatorio</p>
        </div>
        <div className="item-medicamentos">
          <ul className="ul-item-medicamentos">
            <hr />
            {medicamentosItem.map((item) => (
              <li key={item} className="mb-3"> <GiPill className="mx-3"/> {item} <BiSolidEdit onClick={handleSubmitMedicamento} className="mx-3"/><hr /></li>
            ))}
            
          </ul>
          <div className="icono-item-medicamento" onClick={handleSubmitMedicamento}>
            <BsPlusSquareDotted className="icono-plus-medicamento "/>   
          </div>
        </div>
      </div>
    </div>
  )
}
