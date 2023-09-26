import { Sidebar } from "../../../components/sidebar/Sidebar"
import imgLogo from '../../../assets/img/LogoCompletoMedTrack.png'
import vectorPNG from '../../../assets/img/Vector.png'
import { PiUserCircleLight } from 'react-icons/pi';
import { CiMail, CiPhone } from 'react-icons/ci';
import './css/historiaStyle.css'

const usuarios = [
    {
        name: 'Robin',
        last_name: 'Van Persi',
        Fecha_nacieminto: '27 agosto 1978',
        peso: '78',
        estatura: '1,89',
        tipo_RH: 'O+',
        correo: 'robinUnivalle@correounivalle.edu.co',
        telefono: '3156778899',
        historia: {
            Alergias: 'No se reportan alergias conocidas.',
            Enfermedades_Cronicas: 'Hipertensión arterial diagnosticada en 2010.',
            cirugias: 'Colectomía parcial en 2015 debido a diverticulitis.'
        }
    }
];

export const Historia = () => {
    return (
        <div>
            <Sidebar />
            <div className="container-historia mx-5">
                <img className="imgLogoprincipalDashboard " src={imgLogo} alt="" />
                <div className="titleContainer mx-3">
                    <img src={vectorPNG} alt="" className='mx-1' />
                    <p className='titleMedicamentos mb-2'>Historia Clinica</p>
                </div>
                <div className="mt-4 mx-5">
                    {usuarios.map((usuario, index) => (
                        <div key={index} className="usuario-card">
                            <h2>{usuario.name} {usuario.last_name}</h2>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <PiUserCircleLight className="icono-perfil-historia" />
                                <p>{usuario.Fecha_nacieminto}</p>
                            </div>
                            <div style={{ display: 'flex' }} className="mx-3">
                                <p className="mx-2">{usuario.peso} kg</p>
                                <p className="mx-2">{usuario.estatura} m</p>
                                <p className="mx-2">{usuario.tipo_RH}</p>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <p><CiMail className="mx-2 fs-5" /></p>
                                <p>{usuario.correo}</p>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <p><CiPhone className="fs-5 mx-2" /></p>
                                <p> {usuario.telefono}</p>
                            </div>
                            <h3 className="mb-2 mt-3 mx-5" style={{ color: '#0055F9', whiteSpace: 'nowrap' }}>Historia Clinica</h3>
                            <ul style={{fontSize: '18px'}}>
                                {Object.keys(usuario.historia).map((key) => (
                                    <li key={key}><strong>{key}:</strong> {usuario.historia[key]}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
