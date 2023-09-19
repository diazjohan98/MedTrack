import { useCounter } from "../../utilities/useCounter"
import '../../modules/MedTrack/medicamento/css/medicamentosStyle.css'

export const CounterWithCustom = () => {

    const { counter, increment, decrement, } = useCounter();
    return (
        <>
            <button onClick={ () => decrement(1) } className="btn btn-outline-primary">-1</button>
            <p className='textoPildoras mx-3'> {counter} Pildoras</p>
            <button onClick={ () => increment(1) } className="btn btn-outline-primary" >+1</button>
        
        </>
    )
}
