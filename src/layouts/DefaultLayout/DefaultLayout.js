import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import StyledAppBarMain from './components/AppBarMain/AppBarMain.styles'
import StyledAppDrawer from './components/AppDrawer/AppDrawer.styles'
import { Main } from './DefaultLayout.styles'
import Logic from './logic'
import LoadingDotsIcon from '../../components/common/LoadingDotsIcon/LoadingDotsIcon.styles'

const DefaultLayoutContainer = () => {
  const { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle } = Logic()

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBarMain handleDrawerToggle={handleDrawerToggle} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerOpen={handlePersistentDrawerOpen} />
      <StyledAppDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerClose={handlePersistentDrawerClose} />

      <Main openPersistentDrawer={openPersistentDrawer}>
        <Suspense fallback={<LoadingDotsIcon />}>
          <Outlet />
        </Suspense>
      </Main>
    </Box>
  )
}

export default DefaultLayoutContainer
