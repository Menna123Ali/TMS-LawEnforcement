import { styled } from '@mui/material'
import LoadingDotsIcon from './LoadingDotsIcon'

const StyledLoadingDotsIcon = styled(LoadingDotsIcon)(({ theme }) => ({
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

export default StyledLoadingDotsIcon
