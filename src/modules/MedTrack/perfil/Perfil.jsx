import PerfilIcono from "../../../assets/Perfil.png";
import IconoEnfermero from "../../../assets/IconoEnfermero.png";
// import ConfigIcon from "../../../assets/ConfigIcon.png";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import './css/perfilStyle.css'

export const Perfil = () => {
  const navigate = useNavigate()
    const handleSubmitEmergencia = () => {
        navigate('/emergency')

    }
    const handleSubmitHistory = () => {
        navigate('/historia')

    }
  return (
    <div>
      <Sidebar/>
    <div className="container pt-5 mx-5">
      <div className="row">
        <div className="col-4">
          <img src={PerfilIcono} className="img-fluid pt-4 mx-2"></img>
        </div>
        <div className="col-4">
          <img src={IconoEnfermero} className="img-fluid"></img>
        </div>
        {/* <div className="col-4">
          <button type="button" className="btn">
            <img src={ConfigIcon} className="img-fluid pt-2"></img>
          </button>
        </div> */}
      </div>
      <div className="pt-5 ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Nombre</p>
        </button>
      </div>
      <div className="ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Fecha de nacimiento</p>
        </button>
      </div>
      <div className="ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Peso</p>
        </button>
      </div>
      <div className="ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Estatura</p>
        </button>
      </div>
      <div className="ps-2">
        <button type="button mt-3" className="btn btn-outline-success" onClick={handleSubmitEmergencia}>
          <p className="fs-1 btnPerfil">Contacto de emergencia</p>
        </button>
      </div>
      <div className="ps-2 mt-3">
        <button type="button" className="btn btn-outline-success" onClick={handleSubmitHistory}>
          <p className="fs-1 btnPerfil">Historia clinica</p>
        </button>
      </div>
      
    </div>
    </div>
  );
};
