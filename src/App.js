import './App.css'

import Table from './components/Table'

function App() {

  const showAlert = (str) => {
    alert(str)
  }

  return (
    <div className="App">
      <Table cabecalho={['Nome','Idade','Actions']} dados={[{nome: 'Jorge', idade: '32'},{nome: 'Paulo', idade: '21'}]} showAlert={showAlert} />
    </div>
  )
}

export default App
