import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import UseFlashMessage from '../../utils/hooks/UseFlashMessage'
import { appSlice } from '../../store/AppSlice'
import { getUserPages } from '../../services/UserServices'
import { getAllLookupTables } from '../../services/CommonServices'

const Logic = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openPersistentDrawer, setopenPersistentDrawer] = React.useState(true)

  const { addFlashMessage } = UseFlashMessage()
  const { update: appUpdate } = appSlice.actions
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    const { isAuthenticated } = state.app
    return { isAuthenticated }
  }, shallowEqual)

  function handlePersistentDrawerOpen() {
    setopenPersistentDrawer(true)
  }

  function handlePersistentDrawerClose() {
    setopenPersistentDrawer(false)
  }
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState)
  }
  async function handleGetUserPages() {
    try {
      getUserPages({
        onSuccess: (response) => {
          if (!response.data) {
            addFlashMessage({ type: 'warning', message: 'No Menu to render' })
          } else {
            dispatch(appUpdate([{ prop: 'modulePages', value: response.data }]))
          }
        },
      })
    } catch (e) {
      addFlashMessage({ type: 'error', message: 'There was a problem or the request was cancelled.' })
    }
  }
  async function callCacheData() {
    getAllLookupTables({
      onSuccess: (response) => {
        dispatch(appUpdate([{ prop: 'CACHE_DATA', value: response.data.model }]))
        localStorage.setItem('CACHE_DATA', JSON.stringify(response.data.model))
      },
    })
  }

  useEffect(() => {
    if (state.isAuthenticated) {
      handleGetUserPages()
      callCacheData()
    }
  }, [state.isAuthenticated])

  return { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle }
}

export default Logic
