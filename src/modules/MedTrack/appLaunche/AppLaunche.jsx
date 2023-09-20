import './css/appLauncheStyle.css';
import imgLogo from '../../../assets/img/LogoPrincipalM.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AppLaunche = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga del logo durante 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  const handleSubmitMedicamento = () => {
    navigate('/login');
  };

  return (
    <div className={`containerLaunche`}>
      <img src={imgLogo} alt="" className={`LogoAppLaunche ${isLoading ? 'rotate-logo' : ''}`}/>
      <button onClick={handleSubmitMedicamento} className='btn btn-outline-light'>Empezar</button>
    </div>
  );
};
