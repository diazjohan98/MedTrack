import { useState } from "react"
import logoMedtrackSidebar from '../../assets/img/LogoTextoblanco.png'
import './css/sidebarStyle.css'
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFileBarGraphFill } from 'react-icons/bs';
import { BiSolidLogOut } from 'react-icons/bi';
import { FaUserCircle, FaBriefcaseMedical } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


// const navItems = ["Perfil", "Registrar Medicamentos", "Graficos", "Cerrrar Sesión"];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()
    const handleSubmitMedicamento = () => {
        navigate('/medicamento')

    }
    const handleSubmitGrafico = () => {
        navigate('/graficos')

    }
    const handleSubmitClose = () => {
        navigate('/appLaunche')

    }
    const handleSubmitUser = () => {
        navigate('/perfil')

    }

    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                        </span>
                    </button>
                    <img src={logoMedtrackSidebar} className="sidebar-logo" />
                </header>
                <nav className="sidebar-menu">
                    <button type="button" className="sidebar-button">
                        <FaUserCircle />
                        <span className="material-symbols-outlined  mx-2" onClick={handleSubmitUser} >Perfil</span>
                    </button>
                    <button type="button" className="sidebar-button" >
                        <FaBriefcaseMedical />
                        <span className="material-symbols-outlined mx-2 fontMedicamentos" onClick={handleSubmitMedicamento}>Registrar Medicamentos</span>
                    </button>
                    <button type="button" className="sidebar-button">
                        <BsFileBarGraphFill />
                        <span className="material-symbols-outlined mx-2"  onClick={handleSubmitGrafico}>Graficos</span>
                    </button>
                    <div className="btnCloseSidebar">
                        <button type="button" className="sidebar-button">
                            <BiSolidLogOut />
                            <span className="material-symbols-outlined mx-2" onClick={handleSubmitClose}>Cerrar Sesión</span>
                        </button>
                    </div>


                </nav>
            </div>
        </nav>
    );
};
