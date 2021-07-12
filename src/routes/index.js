import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFound from '../components/NotFound'
import SignIn from '../components/SignIn'
import PrivateRoute from './PrivateRoute'
import About from '../components/About'
import Count from '../components/Count'
import Hello from '../components/Hello'
import Home from '../components/Home'
import Menu from '../components/Menu'

function Routes() {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route path="/signin" component={SignIn} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/hello/:name"
          component={ props => {
            return <Hello name={props.computedMatch.params.name} />
          }} />
        <PrivateRoute exact path="/count/:number"
          component={ props => {
            return <Count number={props.computedMatch.params.number} />
          }} />
        <PrivateRoute exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
