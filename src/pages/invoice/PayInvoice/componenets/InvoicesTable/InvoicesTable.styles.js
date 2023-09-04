import { styled } from '@mui/material'
import InvoicesTable from './InvoicesTable'

const StyledInvoicesTable = styled(InvoicesTable)(({ theme }) => ({
  padding: theme.spacing(3),
  '& .tableContainer': {
    [theme.breakpoints.down('sm')]: {
      '&': { border: 0, boxShadow: 'none' },
    },
  },
}))
export default StyledInvoicesTable
