import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Tabela from './tabela'
import Alerta from './alerta'
import Cadastrar from './cadastrar'

import useAuth from '../../hooks/useAuth'

const Livro = () => {
  const {
    listaObjetos,
    setListaObjetos,
    codigo,
    setCodigo
  } = useAuth()

  const [alerts, setAlerts]= useState([])

  const remover = objeto => {
    if (window.confirm("Remover este livro?")) {
      setListaObjetos(listaObjetos.filter(livro => livro.id !== objeto.id))
      setAlerts(alerts=> [...alerts, objeto.titulo])
    }
  }

  const inserir = objeto => {
    setCodigo(codigo + 1)
    objeto.id = codigo
    setListaObjetos([...listaObjetos, objeto])
  }

  const editar = objeto => {
    setListaObjetos(listaObjetos.map(livro => {
      if (livro.id === objeto.id) livro = objeto
      return livro
    }))
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

      <Router>
        <Switch>
          <Route exact path="/livros"
            render={
            () => <Tabela listaObjetos={listaObjetos}
              remover={remover} />
          } />

          <Route exact path="/livros/cadastrar" render={() =>
            <Cadastrar inserir={inserir}
              objeto={{ id: 0, titulo: "", autor: "", ano: "" }} />
          } />

          <Route exact path="/livros/editar/:id" render={ props => {
            const objeto = listaObjetos.find(
              objeto => objeto.id === Number(props.match.params.id)
            )

            if (objeto) {
              return (
                <Cadastrar editar={editar} objeto={objeto} />
              )
            } else {
              return <Redirect to="/livros"/>
            }
          }} />
        </Switch>
      </Router>
    </>
  )
}

export default Livro
