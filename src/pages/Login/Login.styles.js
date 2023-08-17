import { styled } from '@mui/material'
import Login from './Login'

const StyledLogin = styled(Login)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100vw',
  minHeight: '100vh',
  padding: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .leftSection': {
    flex: 1,
    textAlign: 'center',
    maxWidth: '480px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
    },
  },
  '&  .leftSelection': {
    maxWidth: '320px',
    margin: '0 auto',
    padding: '60px 16px 30px',
  },
  '&  .loginWrap': {
    display: 'flex',
    maxWidth: '1280px',
    width: '100%',
    borderRadius: '0px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  '&  .rightSection': {
    background: 'rgb(247,144,30)',
    color: theme.palette.primary.contrastText,
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&  .rightP': {
    color: '#fff',
  },
  '&  .rightTitle': {
    fontSize: '3.2rem',
    fontWeight: '500',
    margin: '0 0 30px 0',
  },
}))
export default StyledLogin
