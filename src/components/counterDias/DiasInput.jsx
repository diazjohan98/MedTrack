import { useState } from "react";

export const DiasInput = ({ onChange }) => {
    const [dias, setDias] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;

        // Validar que el valor ingresado sea un número positivo
        if (/^\d+$/.test(inputValue)) {
            setDias(inputValue);
            onChange(inputValue); // Llama a la función onChange con el valor actualizado
        } else if (inputValue === '') {
            setDias('');
            onChange(''); // Llama a la función onChange con una cadena vacía si el usuario borra el campo
        }
    };

    return (

        <div className="input-group mb-3 ">
            <input type="text"
                placeholder="#"
                value={dias}
                onChange={handleChange} 
                className="form-control " 
                // style={{border: '15px'}}
         />
                <span className="input-group-text" id="basic-addon2">Dias</span>
        </div>
    );
}

