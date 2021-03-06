import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '.'

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  return (
    <Route
      render={() =>
        isAuthenticated() && isAuthenticated().user.role === 1 ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}

export default AdminRoute
