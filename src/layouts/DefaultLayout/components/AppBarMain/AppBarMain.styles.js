import { IconButton, styled } from '@mui/material'
import AppBarMain from './AppBarMain'
import { drawerWidth } from '../../../../utils/constants/config'

const StyledAppBarMain = styled(AppBarMain)(({ theme, openPersistentDrawer }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: '#fff',
  boxShadow: 'none',
  height: 60,
  ...(openPersistentDrawer && {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
}))
export const UserMenuContainer = styled('div')(({ theme }) => ({
  flex: '1',
}))
export const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,

  paddingLeft: 0,
  paddingRight: 0,
  marginRight: '10px',
}))
export default StyledAppBarMain
