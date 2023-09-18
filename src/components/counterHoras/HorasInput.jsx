import { useState } from "react";
import '../../modules/MedTrack/medicamento/css/medicamentosStyle.css'

export const HorasInput = ({ onChange }) => {
    const [horas, setHoras] = useState('');
    const [periodo, setPeriodo] = useState('AM');

    const handleChangeHoras = (e) => {
        const inputValue = e.target.value;

        // Validar que el valor ingresado sea un número positivo y esté dentro del rango de 0 a 12
        if (/^\d+$/.test(inputValue) && parseInt(inputValue) >= 0 && parseInt(inputValue) <= 12) {
            setHoras(inputValue);
            onChange(`${inputValue}:${periodo}`);
        } else if (inputValue === '') {
            setHoras('');
            onChange('');
        }
    };

    const handleChangePeriodo = (e) => {
        const selectedPeriodo = e.target.value;
        setPeriodo(selectedPeriodo);
        onChange(`${horas}:${selectedPeriodo}`);
    };

    return (
        <div className="containerHorasInput">
            <input
                type="text"
                placeholder="Horas (0-12)"
                value={horas}
                onChange={handleChangeHoras}
                className="form-control" aria-label="Text input with dropdown button"
            />
            <select className="btn btn-outline-primary" value={periodo} onChange={handleChangePeriodo}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
    );
}