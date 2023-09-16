import ImgLogo from '../../../assets/img/LogoMedTrack.png';
import './css/registrarse.css'

export const Registrarse = () => {
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
                    <button type="submit" className="btn btn-primary rounded-pill">REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
