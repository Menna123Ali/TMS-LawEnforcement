import { styled } from '@mui/material'
import Page404 from './Page404'

const StyledPage404 = styled(Page404)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '60px',

  '& > .errorIcon': {
    fontSize: '120px',
    color: theme.palette.secondary.main,
  },
  '& > .text404': {
    fontSize: '90px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  '& > .errorText': {
    fontSize: '40px',
    color: theme.palette.primary.main,
    fontWeight: 'normal',
  },
  '& > .errorAuthorizedText': {
    fontSize: '30px',
    color: theme.palette.primary.main,
    fontWeight: 'normal',
  },
  '& > .contactMessage': {
    fontSize: '20px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}))
export default StyledPage404
