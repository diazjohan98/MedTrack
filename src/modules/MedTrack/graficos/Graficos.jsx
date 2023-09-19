import GraficosI from "../../../assets/Graficos.png";
import ConfigIcon from "../../../assets/ConfigIcon.png";
import Chart from "./GraficoLineas";

export const Graficos = () => {



  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-6">
          <img src={GraficosI} className="img-fluid pt-4"></img>
        </div>
        <div className="col-6 pt-5 mt-4 position-absolute top-10 start-100 translate-middle">
          <button type="button" className="btn">
            <img src={ConfigIcon} className="img-fluid pt-2"></img>
          </button>
        </div>
      </div>
      <div className="pt-5 mt-5">
      </div>
      <div className="pt-5 mt-5">
        <Chart className="pt-5 mt-5"></Chart>
      </div>
    </div>
  );
};
