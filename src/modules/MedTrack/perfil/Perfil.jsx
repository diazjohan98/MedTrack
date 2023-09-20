import PerfilIcono from "../../../assets/Perfil.png";
import IconoEnfermero from "../../../assets/IconoEnfermero.png";
import ConfigIcon from "../../../assets/ConfigIcon.png";

export const Perfil = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-4">
          <img src={PerfilIcono} className="img-fluid pt-4"></img>
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
        <button type="button" className="btn">
          <p className="fs-1">Contacto de emergencia</p>
        </button>
      </div>
      <div className="pt-4">
        <button type="button" className="btn">
          <p className="fs-1" style={{ color: "#5BD654" }}>
            Cerrar Sesion
          </p>
        </button>
      </div>
    </div>
  );
};
