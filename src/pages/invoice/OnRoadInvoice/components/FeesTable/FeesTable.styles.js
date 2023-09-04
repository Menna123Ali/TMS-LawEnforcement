import { styled } from '@mui/material'
import FeesTable from './FeesTable'

const StyledFeesTable = styled(FeesTable)(({ theme }) => ({
  padding: theme.spacing(3),
  '& .tableContainer': {
    [theme.breakpoints.down('sm')]: {
      '&': { border: 0, boxShadow: 'none' },
    },
  },
}))
export default StyledFeesTable
