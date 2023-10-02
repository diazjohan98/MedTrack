import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import ImgLogo from "../../../assets/img/LogoCompletoMedTrack.png";
import "./css/registrarse.css";

export const Registrarse = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
        };

    const handleChangePassword = (e) => {
            setPassword(e.target.value);
        };
    
    const handleChangeEmail = (e) => {
            setEmail(e.target.value);
        };

    const dataRegistro = {
        username: username,
        email: email,
        password: password,
    }
    
    const navigate = useNavigate();
    const handleSubmitMedicamento = () => {
        console.log(dataRegistro);
        axios.post("https://backend-med-track.vercel.app/api/auth/register", dataRegistro)
        .then((response) => {
          console.log('Respuesta del backend', response.data,);
          if (response.status === 201) {
            navigate("/login");
          }
        })
        .catch(error => {
          console.error('Error: ' + error);
        })
    };
    return (
        <div className="containerRegistrarse">
        <img className="imgLogoLoginPrincipal" src={ImgLogo} alt="" />
        <p className="titleRegistrarse">REGISTRO</p>
        <form>
            <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChangeEmail}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input
                type="text"
                className="form-control"
                id="exampleInputID"
                onChange={handleChangeUsername}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                onChange={handleChangePassword}
            />
            </div>
            <div className="mb-3">
            <label className="form-label"> Confirmar Contraseña</label>
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
            />
            </div>
            <div className="d-grid gap-2 mt-4">
            <button
                type="button"
                onClick={handleSubmitMedicamento}
                className="btn btn-primary rounded-pill"
            >
                REGISTRAR
            </button>
            </div>
        </form>
        </div>
    );
};
