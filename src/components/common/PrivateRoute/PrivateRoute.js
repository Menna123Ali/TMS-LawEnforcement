import React, { useEffect, useState, isValidElement, cloneElement } from 'react'
import { Navigate } from 'react-router-dom'

import Logic from './logic'

const PrivateRoute = ({ children }) => {
  const [newChildren, setNewChildren] = useState(null)
  const { allowRoute, pagePermissions, addPropsToChildren } = Logic()

  useEffect(() => {
    setNewChildren(
      React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(
            child,
            {},
            React.Children.map(child.props.children, (grandChild) => {
              if (isValidElement(grandChild)) {
                return cloneElement(grandChild, { pagePermissions })
              }
              return grandChild
            })
          )
        }
        return child
      })
    )
  }, [children, pagePermissions])

  return allowRoute ? addPropsToChildren(newChildren, { pagePermissions }) : <Navigate to="/404" />
}

export default PrivateRoute
