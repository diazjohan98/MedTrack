import Perfil from "../../../assets/Perfil.png";
import IconoEnfermero from "../../../assets/IconoEnfermero.png";
import ConfigIcon from "../../../assets/ConfigIcon.png";
import IconoLlamar from "../../../assets/IconoLlamar.png";

export const Emergency = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-4">
          <img src={Perfil} className="img-fluid pt-4" ></img>
        </div>
        <div className="col-4">
          <img src={IconoEnfermero} className="img-fluid"></img>
        </div>
        <div className="col-4">
          <button type="button" className="btn">
            <img src={ConfigIcon} className="img-fluid pt-2"></img>
          </button>
        </div>
      </div>
      <div className="p-4 pt-5 ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Información personal</p>
        </button>
      </div>
      <div className="p-4 ps-2">
        <button type="button" className="btn">
          <p className="fs-1">Medicamentos</p>
        </button>
      </div>
      <div className="p-4">
        <p className="fs-1">Contacto de Emergencia</p>
      </div>
      <div className="mx-auto" style={{width: 100}}>
        <button type="button" className="btn">
          <img src={IconoLlamar} className="img-fluid"></img>
        </button>
        <p className="fs-1">Llamar</p>
      </div>
      <div>
        <button type="button" className="btn">
          <p className="fs-1" style={{color: "#5BD654"}}>Cerrar Sesion</p>
        </button>
      </div>
    </div>
  );
};
