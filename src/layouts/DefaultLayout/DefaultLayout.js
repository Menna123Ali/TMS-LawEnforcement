import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import StyledAppBarMain from './components/AppBarMain/AppBarMain.styles'
import StyledAppDrawer from './components/AppDrawer/AppDrawer.styles'
import { Main } from './DefaultLayout.styles'
import Logic from './logic'
import LoadingDotsIcon from '../../components/common/LoadingDotsIcon/LoadingDotsIcon.styles'
import { shallowEqual, useSelector } from 'react-redux'

const DefaultLayout = () => {
  const { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle } = Logic()
  const state = useSelector((state) => {
    const { modulePages, cacheData } = state.app
    return { modulePages, cacheData }
  }, shallowEqual)
  console.log('DefaultLayout')
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBarMain handleDrawerToggle={handleDrawerToggle} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerOpen={handlePersistentDrawerOpen} />
      <StyledAppDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerClose={handlePersistentDrawerClose} />

      <Main openPersistentDrawer={openPersistentDrawer}>
        <Suspense fallback={<LoadingDotsIcon />}>{state.modulePages.length > 0 && state.cacheData.length > 0 && <Outlet />}</Suspense>
      </Main>
    </Box>
  )
}

export default DefaultLayout
