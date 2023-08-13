import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import StyledAppBarMain from './components/AppBarMain/AppBarMain.styles'
import StyledAppDrawer from './components/AppDrawer/AppDrawer.styles'
import { Main } from './DefaultLayout.styles'

const DefaultLayoutContainer = ({ className, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openPersistentDrawer, setopenPersistentDrawer] = React.useState(true)

  function handlePersistentDrawerOpen() {
    setopenPersistentDrawer(true)
  }

  function handlePersistentDrawerClose() {
    setopenPersistentDrawer(false)
  }
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState)
  }

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
