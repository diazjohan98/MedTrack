import { useNavigate } from 'react-router-dom'
import vectorPNG from '../../../assets/img/Vector.png'
import { CounterWithCustom } from '../../../components/CounterWithHook.jsx/CounterWithCustom'
import { DiasApp } from '../../../components/counterDias/DiasApp'
import { HorasInput } from '../../../components/counterHoras/HorasInput'
import './css/medicamentosStyle.css'

export const Medicamento = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleSubmitGuardar = () => {
    navigate('/sidebar')
  }

  return (
    <div className="containerMedicamentos">
      <div className="titleContainer">
        <img src={vectorPNG} alt="" className='mx-3' />
        <p className='titleMedicamentos'>Registra Medicamentos</p>
      </div>

      <div className='containerMedicamentosInputs mt-5'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label titleLabels">Nombre</label>
            <input type="text" className="form-control" placeholder='Que medicamento?' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className='mb-3'>
            <p className='titleLabels'>Cantidad</p>
            <div className='pildoras'>
              <CounterWithCustom />
            </div>
          </div>
          <div className='mb-3'>
            <p className='titleLabels'>Duración</p>
            <div className='duracion'>
              <DiasApp />
            </div>
          </div>
          <div className='mb-3'>
            <p className='titleLabels'>Hora</p>
            <div className='duracion'>
              <HorasInput />
            </div>
          </div>
          <div className='mt-5 d-grid gap-2 col-6 mx-auto'>
            <button className='btn btn-primary' onClick={handleSubmitGuardar}>GUARDAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}
