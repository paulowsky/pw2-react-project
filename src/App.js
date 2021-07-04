import { useState } from 'react'
import './App.css'

import Filho from './components/Filho'

function App() {
  const [valor, setValor] = useState(0)

  return (
    <div className="Pai">
      <h1>Random Number Generator</h1>
      <h2>Valor: {valor}</h2>
      <Filho setValor={setValor} />
    </div>
  )
}

export default App
