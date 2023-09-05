import { AppBar, Hidden, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import StyledUserMenu from '../UserMenu/UserMenu.styles'
import { MenuButton, UserMenuContainer } from './AppBarMain.styles'

const AppBarMain = ({ className, openPersistentDrawer, handleDrawerToggle, handlePersistentDrawerOpen, ...props }) => {
  return (
    <AppBar position="fixed" className={className}>
      <Toolbar className="toolbar">
        {!openPersistentDrawer && (
          <Hidden smDown implementation="css">
            <MenuButton color="inherit" aria-label="open drawer" edge="start" onClick={handlePersistentDrawerOpen}>
              <MenuIcon />
            </MenuButton>
          </Hidden>
        )}

        <Hidden smUp implementation="css">
          <MenuButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MenuButton>
        </Hidden>

        <UserMenuContainer>
          <StyledUserMenu />
        </UserMenuContainer>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarMain
