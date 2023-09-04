import React, { useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import UseFlashMessage from '../../utils/hooks/UseFlashMessage'
import { appSlice } from '../../store/AppSlice'
import { getUserPages } from '../../services/UserServices'
import { getAllLookupTables, getCurrentAppVersion } from '../../services/CommonServices'

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

  const handlePersistentDrawerClose = useCallback(() => {
    setopenPersistentDrawer(false)
  }, [])
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState)
  }, [])
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
        dispatch(appUpdate([{ prop: 'cacheData', value: response.data.model }]))
        localStorage.setItem('CACHE_DATA', JSON.stringify(response.data.model))
      },
    })
  }

  const GetCopyRight = async () => {
    getCurrentAppVersion({
      onSuccess: (response) => {
        console.log(response)
        dispatch(appUpdate([{ prop: 'copyRight', value: response.data.copyright }]))
      },
    })
  }

  useEffect(() => {
    if (state.isAuthenticated) {
      handleGetUserPages()
      callCacheData()
      GetCopyRight()
    }
  }, [state.isAuthenticated])

  return { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle }
}

export default Logic
