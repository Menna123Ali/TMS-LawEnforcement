import { AppBar, Hidden, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerWidth } from '../../../../utils/constants/common'
import StyledUserMenu from '../UserMenu/UserMenu.styles'
import { MenuButton, UserMenuContainer } from './AppBarMain.styles'

const AppBarMain = ({ className, openPersistentDrawer, handleDrawerToggle, handlePersistentDrawerOpen, ...props }) => {
  console.log(props)
  return (
    <AppBar position="fixed" className={className}>
      <Toolbar>
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
