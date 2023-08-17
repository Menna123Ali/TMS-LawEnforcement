import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import StyledAppBarMain from './components/AppBarMain/AppBarMain.styles'
import StyledAppDrawer from './components/AppDrawer/AppDrawer.styles'
import { Main } from './DefaultLayout.styles'
import Logic from './logic'

const DefaultLayoutContainer = () => {
  const { mobileOpen, openPersistentDrawer, handlePersistentDrawerOpen, handlePersistentDrawerClose, handleDrawerToggle } = Logic()

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBarMain handleDrawerToggle={handleDrawerToggle} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerOpen={handlePersistentDrawerOpen} />
      <StyledAppDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} openPersistentDrawer={openPersistentDrawer} handlePersistentDrawerClose={handlePersistentDrawerClose} />
      <Main openPersistentDrawer={openPersistentDrawer}>
        <Outlet />
      </Main>
    </Box>
  )
}

export default DefaultLayoutContainer
