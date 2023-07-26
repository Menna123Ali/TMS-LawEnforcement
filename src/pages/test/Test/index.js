import { styled } from '@mui/material'
import Test from './Test'

const StyledTest = styled(Test)(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(2),
  // backgroundColor: theme.palette.primary.main,
  color: '#3c44b1',
  '& > .test': {
    backgroundColor: theme.palette.primary.main,
  },
}))
export default StyledTest
