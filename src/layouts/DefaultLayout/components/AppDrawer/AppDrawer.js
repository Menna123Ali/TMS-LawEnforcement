import { Box, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, styled, useTheme } from '@mui/material'
import { drawerWidth } from '../../../../utils/constants/common'
import StyledDrawerContent from '../DrawerContent/DrawerContent.styles'

const AppDrawer = ({ className, mobileOpen, handleDrawerToggle, openPersistentDrawer, handlePersistentDrawerClose, ...props }) => {
  console.log(props)
  const { window } = props
  const container = window !== undefined ? () => window().document.body : undefined
  const theme = useTheme()
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: theme.palette.primary.main },
        }}
      >
        <StyledDrawerContent handleDrawerClose={handleDrawerToggle} />
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: theme.palette.primary.main },
        }}
        variant="persistent"
        open={openPersistentDrawer}
      >
        <StyledDrawerContent handleDrawerClose={handlePersistentDrawerClose} />
      </Drawer>
    </Box>
  )
}

export default AppDrawer
