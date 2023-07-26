import { styled } from '@mui/material'
import AppDrawer from './AppDrawer'

const StyledAppDrawer = styled(AppDrawer)(({ theme }) => ({}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))
export default StyledAppDrawer
