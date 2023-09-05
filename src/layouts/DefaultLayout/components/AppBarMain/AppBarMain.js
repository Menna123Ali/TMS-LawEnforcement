import { AppBar, Hidden, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import StyledUserMenu from '../UserMenu/UserMenu.styles'
import { MenuButton, UserMenuContainer } from './AppBarMain.styles'
import { useDynamicCSSVar } from '../../../../utils/hooks/useDynamicCSSVar'

const AppBarMain = ({ className, openPersistentDrawer, handleDrawerToggle, handlePersistentDrawerOpen, ...props }) => {
  const headerRef = useDynamicCSSVar('--header-height')

  return (
    <AppBar position="fixed" className={className} ref={headerRef}>
      <Toolbar className="toolbar">
        {!openPersistentDrawer && (
          <Hidden smDown implementation="css">
            <MenuButton color="inherit" aria-label="open drawer" edge="start" onClick={handlePersistentDrawerOpen}>
              <MenuIcon />
            </MenuButton>
          </Hidden>
        )}

        {/* <Hidden smUp implementation="css">
          <MenuButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MenuButton>
        </Hidden> */}

        <UserMenuContainer>
          <StyledUserMenu />
        </UserMenuContainer>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarMain
