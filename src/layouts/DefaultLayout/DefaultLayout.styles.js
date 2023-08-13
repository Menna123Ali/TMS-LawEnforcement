import { styled } from '@mui/material'
import DefaultLayoutContainer from './DefaultLayout'
import { drawerWidth } from '../../utils/constants/common'

const StyledDefaultLayout = styled(DefaultLayoutContainer)(({ theme }) => ({}))
export const Main = styled('main')(({ theme, openPersistentDrawer }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  width: 'fit-content',
  overflow: 'auto',
  background: theme.palette.pageBackground.main,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    marginLeft: `-${drawerWidth}px`,
  },

  ...(openPersistentDrawer && {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
}))
export default StyledDefaultLayout
