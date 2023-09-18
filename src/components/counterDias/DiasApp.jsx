
import { useState } from 'react';
import {DiasInput} from './DiasInput';

export const DiasApp = () => {
    const [diasSeleccionados, setDiasSeleccionados] = useState('');

    const handleDiasChange = (nuevosDias) => {
      setDiasSeleccionados(nuevosDias);
    };
  
    return (
      <div>
        <DiasInput onChange={handleDiasChange} />
        <p>Días seleccionados: {diasSeleccionados}</p>
      </div>
    );
}