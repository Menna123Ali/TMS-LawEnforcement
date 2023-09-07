import { styled } from '@mui/material'
import ErrorHandler from './ErrorHandler'

const StyledErrorHandler = styled(ErrorHandler)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',

  '& > .errorIcon': {
    fontSize: '120px',
    color: theme.palette.secondary.main,
  },
  '& > .errorText': {
    fontSize: '40px',
    color: theme.palette.primary.main,
    fontWeight: 'normal',
  },

  '& > .contactMessage': {
    fontSize: '20px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}))
export default StyledErrorHandler
