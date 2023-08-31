import React, { useEffect, useState, isValidElement, cloneElement } from 'react'
import { Navigate } from 'react-router-dom'

import Logic from './logic'

const PrivateRoute = ({ children }) => {
  const { allowRoute, pagePermissions, addPropsToChildren } = Logic()

  return allowRoute ? addPropsToChildren(children, { pagePermissions }) : <Navigate to="/404" />
}

export default PrivateRoute
