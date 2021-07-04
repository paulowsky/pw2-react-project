import { useEffect, useState } from 'react'

import './index.css'

function Form(props) {
  const { showImc, resetTable } = props
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    let imc = calcImc(peso, altura)

    if(imc >= 40) {
      showImc({'IMC': imc, 'Classificacao': 'OBESIDADE GRAVE', 'GrauObesidade': 'III'})
    } else if (imc >= 30) {
      showImc({'IMC': imc, 'Classificacao': 'OBESIDADE', 'GrauObesidade': 'II'})
    } else if (imc >= 25) {
      showImc({'IMC': imc, 'Classificacao': 'SOBREPESO', 'GrauObesidade': 'I'})
    } else if (imc >= 18.5) {
      showImc({'IMC': imc, 'Classificacao': 'NORMAL', 'GrauObesidade': '0'})
    } else {
      showImc({'IMC': imc, 'Classificacao': 'MAGREZA', 'GrauObesidade': '0'})
    }
  }

  const calcImc = () => {
    return (parseFloat(peso)/parseFloat(altura)**2).toFixed(2)
  }

  const resetForm = () => {
    setPeso('')
    setAltura('')
    resetTable()
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>

        <input className="input" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Peso em KG" />

        <input className="input" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Altura em Metros" />

        <button className="button button-submit" type="submit">Submit</button>
      </form>
      <button className="button button-reset" onClick={() => resetForm()}>Reset</button>
    </div>
  )
}

export default Form
