import { useState } from 'react'
import './index.css'

function Filho({ setValor }) {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const gerarValor = () => {
    if (min && max) {
      setValor(Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min))
    } else {
      alert('Invalid values!')
    }
  }

  return (
    <div className="Filho">
      <input placeholder="Mínimo" value={min} onChange={(e) => setMin(e.target.value.replace(/\D/g, ''))} />
      <input placeholder="Máximo" value={max} onChange={(e) => setMax(e.target.value.replace(/\D/g, ''))} />
      <button onClick={() => gerarValor()}>Gerar</button>
    </div>
  )
}

export default Filho
