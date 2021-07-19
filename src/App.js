import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Livro from './components/livro'
import Menu from './components/menu'
import Home from './components/home'

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/livros" render={ () => <Livro/>}/>
      </Switch>
    </Router>
  )
}

export default App
