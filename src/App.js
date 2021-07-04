import './App.css'

import Table from './components/Table'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [dados, setDados] = useState([])

  const showImc = (imc) => {
    setDados([...dados, imc])
  }

  const resetTable = () => {
    setDados([])
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
      <Table dados={dados} />
      <Form showImc={showImc} resetTable={resetTable} />
    </div>
  )
}

export default App
