import { Navigate } from 'react-router-dom'

import Logic from './logic'
import React from 'react'

const PrivateRoute = ({ children }) => {
  const { allowRoute, pagePermissions, addPropsToChildren } = Logic()

  return allowRoute ? addPropsToChildren(children, { pagePermissions }) : <Navigate to="/404" />
}

export default PrivateRoute
