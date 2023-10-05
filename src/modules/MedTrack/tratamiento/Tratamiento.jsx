import { Sidebar } from "../../../components/sidebar/Sidebar"
import vectorPNG from "../../../assets/img/Vector.png";

export const Tratamiento = () => {
    return (
            <div>
                <Sidebar />
                <div className="containerMedicamentos mx-5">
                    <div className="titleContainer mx-3">
                        <img src={vectorPNG} alt="" className="mx-1" />
                        <p className="titleMedicamentos">Tratamientos</p>
                    </div>
                </div>

            </div>
            )
}
