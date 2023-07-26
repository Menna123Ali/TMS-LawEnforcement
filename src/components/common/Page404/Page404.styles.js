import { styled } from '@mui/material'
import Page404 from './Page404'
import palette from '../../../assets/styles/colors.scss'

const StyledPage404 = styled(Page404)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '60px',

  '& > .errorIcon': {
    fontSize: '120px',
    color: palette.orange,
  },
  '& > .text404': {
    fontSize: '90px',
    color: palette.primary,
    fontWeight: 'bold',
  },
  '& > .errorText': {
    fontSize: '40px',
    color: palette.primary,
    fontWeight: 'normal',
  },
  '& > .errorAuthorizedText': {
    fontSize: '30px',
    color: palette.primary,
    fontWeight: 'normal',
  },
  '& > .contactMessage': {
    fontSize: '20px',
    color: palette.primary,
    fontWeight: 'bold',
  },
}))
export default StyledPage404
