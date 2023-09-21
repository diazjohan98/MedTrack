import { useNavigate } from 'react-router-dom';
import ImgLogo from '../../../assets/img/LogoCompletoMedTrack.png';
import './css/registrarse.css'

export const Registrarse = () => {
    const navigate = useNavigate()
  const handleSubmitMedicamento =()=>{
    navigate('/dashboard')

  }
    return (
        <div className='containerRegistrarse'>
            <img className='imgLogoLoginPrincipal' src={ImgLogo} alt="" />
            <p className='titleRegistrarse'>REGISTRO</p>
            <form>
                <div className="mb-3">
                    <label className="form-label">Correo o ID</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className='d-grid gap-2 mt-4'>
                    <button onClick={handleSubmitMedicamento} type="submit" className="btn btn-primary rounded-pill">REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
