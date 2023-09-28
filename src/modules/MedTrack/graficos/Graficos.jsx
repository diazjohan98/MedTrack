import vectorPNG from "../../../assets/img/Vector.png";
import Chart from "./GraficoLineas";
import { Sidebar } from "../../../components/sidebar/Sidebar";

export const Graficos = () => {
  return (
    <div>
      <Sidebar />
      <div className="container pt-2 mx-5">
        <div className="row">
          <div className="titleContainer mx-3 col-6 ">
            <img src={vectorPNG} alt="" className="mx-1" />
            <p className="titleMedicamentos">Graficos</p>
          </div>
        </div>
        <div className="pt-5 mt-5"></div>
        <div className="pt-5 ps-4">
          <Chart className="pt-5 mt-5"></Chart>
        </div>
      </div>
    </div>
  );
};
