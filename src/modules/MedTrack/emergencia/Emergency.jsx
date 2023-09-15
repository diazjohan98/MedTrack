import Perfil from "../../../assets/Perfil.png";
import IconoEnfermero from "../../../assets/IconoEnfermero.png";
import ConfigIcon from "../../../assets/ConfigIcon.png";
import IconoLlamar from "../../../assets/IconoLlamar.png"

export const Emergency = () => {
  return (
    <div className="container">
      <div className="row">
        <img src={Perfil} className="img-fluid col-3"></img>
        <img src={IconoEnfermero} className="img-fluid col-3"></img>
        <button type="button" className="btn col-3">
          <img src={ConfigIcon} className="img-fluid"></img>
        </button>
      </div>
      <div>
        <button type="button" className="btn">
        <p className="fs-1">Información personal</p>
        </button>
      </div>
      <div>
        <button type="button" className="btn">
          <p className="fs-1">Medicamentos</p>
        </button>
      </div>
      <div>
        <p className="fs-1">Contacto de Emergencia</p>
      </div>
      <div>
        <button type="button" className="btn">
        <img src={IconoLlamar} className="img-fluid"></img>
        </button>
      </div>
    </div>
  );
};
