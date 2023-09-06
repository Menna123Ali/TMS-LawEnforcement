import { styled } from '@mui/material'
import ConfirmationDialog from './ConfirmationDialog'

const StyledConfirmationDialog = styled(ConfirmationDialog)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flex: '1',
  height: '80%',
  '& >.icon': {
    width: '80px',
    height: '80px',
  },
  '& >.label': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}))

export default StyledConfirmationDialog
