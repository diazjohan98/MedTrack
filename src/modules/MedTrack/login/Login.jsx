import { useNavigate } from 'react-router-dom';
import ImgLogo from '../../../assets/img/LogoMedTrack.png';
import './css/Login.css';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';


export const Login = () => {

  const navigate = useNavigate()
  const handleSubmitMedicamento =()=>{
    navigate('/medicamento')

  }
  const handleSubmitRegistrar =()=>{
    navigate('/registrarse')

  }

  return (
    <div className='containerLogin'>
      <img className='imgLogoLoginPrincipal' src={ImgLogo} alt="" />
      <p className='titleLogin'>INICIAR SESION</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Correo o ID</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className='containerBtnLogin'>
          <button type="submit" onClick={handleSubmitMedicamento} className="btn btn-primary mb-3 rounded-pill">Iniciar Sesión</button>
          <button type="submit" className="btn btn-primary mb-3 btnFacebook"><BsFacebook /></button>
          <button type="submit" className="btn btn-outline-secondary mb-3 btnGoogle" ><FcGoogle className='mx-2' />Iniciar sesión con Google </button>
          <button type="submit" onClick={handleSubmitRegistrar} className="btn btn-outline-primary mb-3 rounded-pill" >Crear cuenta</button>
        </div>
      </form>
    </div>

  )
}
