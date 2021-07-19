import { useState } from 'react'
import Tabela from './tabela'
import Alerta from './alerta'

const livros = [
  {
    id : 1,
    titulo : "React PWA",
    autor : "Mauricio" ,
    ano : 202
  },
  {
    id : 2,
    titulo : "React Hooks",
    autor : "Mauricio" ,
    ano : 2021
  }
]

const Livro = ({})=>{
  const [listaObjetos, setListaObjetos]= useState(livros)
  const [alerts, setAlerts]= useState([])

  const remover = objeto => {
    if (window.confirm("Remover este livro?")) {
      setListaObjetos(listaObjetos.filter(p => p.id !== objeto.id))
      setAlerts(alerts=> [...alerts, objeto.titulo])
    }
  }

  const onCloseAlert = (index)=>{
    setAlerts([...alerts].filter((v,i)=> i!==index))
  }

  return (
    <>
      { alerts.map((value, index) =>
        <Alerta type="success"
          key={index}
          text={`Livro ${value} deletado com sucesso!`}
          timeout={5000}
          onClose={()=>onCloseAlert(index)} />
      )}

      <Tabela listaObjetos={listaObjetos} remover={remover}/>
    </>
  )
}

export default Livro
