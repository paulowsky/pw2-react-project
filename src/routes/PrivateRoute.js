import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { signed } = useAuth()

  return (
    <Route
      {...props}
      render={ () => signed
        ? <Component {...props} />
        : <Redirect to='/signin' />
      }
    />
  )
}

export default PrivateRoute
