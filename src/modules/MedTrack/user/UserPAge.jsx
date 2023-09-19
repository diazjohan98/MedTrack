import { FaRegUserCircle } from 'react-icons/fa';
import vectorNeu from '../../../assets/img/nut.png'
import vectorPNG from '../../../assets/img/Vector.png'
import './css/userStyle.css'
import { useNavigate } from 'react-router-dom';

export const UserPAge = () => {
    const navigate = useNavigate()
    const handleSubmitMedicamento = () => {
        navigate('/medicamento')

    }
    const handleSubmitGrafico = () => {
        navigate('/graficos')

    }
    return (
        <div className="containerUser">
            <div className='iconosPrincipalesUser'>
                <FaRegUserCircle />
                <img src={vectorNeu} alt="" className='vectorPNG' />
            </div>

            <div className="titleContainer">
                <img src={vectorPNG} alt="" className='mx-3' />
                <p className='titleMedicamentos'>Perfil</p>
                <br />
            </div>
           
           <div className='siderUser mt-4 mx-3'>       
                <p onClick={handleSubmitMedicamento}>Registrar medicamentos</p>
            <hr />
                <p onClick={handleSubmitGrafico}>Graficos</p>
            <hr />
           </div>
        </div>
    )
}   
