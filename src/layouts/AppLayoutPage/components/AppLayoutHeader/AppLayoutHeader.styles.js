import { styled } from '@mui/material'
import AppLayoutHeader from './AppLayoutHeader'

const StyledAppLayout = styled(AppLayoutHeader)(({ theme }) => ({
  padding: theme.spacing(2.5),
  background: theme.palette.primary.main,

  '& .title': {
    color: '#fff',
    margin: '0',
    fontSize: '22px',
    textTransform: 'capitalize',
  },
  '& .pageIcon': { color: theme.palette.secondary.main, position: 'absolute', right: '20px', fontSize: '50px' },
}))
export default StyledAppLayout
