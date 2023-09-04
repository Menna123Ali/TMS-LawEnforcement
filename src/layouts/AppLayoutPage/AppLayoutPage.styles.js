import { styled } from '@mui/material'
import AppLayoutPage from './AppLayoutPage'

const StyledAppLayout = styled(AppLayoutPage)(({ theme }) => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& .content': {
    // padding: theme.spacing(3),
    position: 'relative',
  },

  '& .copyright': {
    textAlign: 'center',
    marginTop: 'auto',
    padding: '10px',
    fontSize: '12px',
    color: '#fff',
    background: theme.palette.primary.main,
  },
}))
export default StyledAppLayout
