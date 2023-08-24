import { styled } from '@mui/material'
import Dashboard from './Dashboard'

const StyledDashboard = styled(Dashboard)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontSize: '3rem',
  // padding: '150px 0 0 0',
}))
export default StyledDashboard
