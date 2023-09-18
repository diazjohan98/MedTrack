import './css/appLauncheStyle.css'
import imgLogo from '../../../assets/img/LogoPrincipalM.png'
import { useNavigate } from 'react-router-dom'

export const AppLaunche = () => {
    const navigate = useNavigate()
    const handleSubmitMedicamento = () => {
        navigate('/login')

    }
    return (
        <div className="containerLaunche">
            <img src={imgLogo} alt="" className='LogoAppLaunche' />
            <button onClick={handleSubmitMedicamento} className='btn btn-outline-light'>Empezar</button>
        </div>
    )
}
