import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Logic = () => {
  const location = useLocation()
  const state = useSelector((state) => {
    const { modulePages } = state.app
    return { modulePages }
  }, shallowEqual)

  let allowRoute = false
  let pagePermissions = {}

  let currentPermissions = state.modulePages
    .map((element) => element.pages)
    .flat()
    .filter((el) => el.pageUrl === location.pathname)

  if (currentPermissions.length > 0) {
    allowRoute = true
    pagePermissions = currentPermissions[0]
  }
  function addPropsToReactElement(element, props) {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props)
    }
    return element
  }
  function addPropsToChildren(children, props) {
    if (!Array.isArray(children)) {
      return addPropsToReactElement(children, props)
    }
    return children.map((childElement) => addPropsToReactElement(childElement, props))
  }
  return { allowRoute, pagePermissions, addPropsToChildren }
}

export default Logic
