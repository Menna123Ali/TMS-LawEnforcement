import { styled } from '@mui/material'
import InvoicePayment from './InvoicePayment'

const StyledInvoicePayment = styled(InvoicePayment)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(3),
  '& .searchButton': {
    minHeight: '52px',
    margin: '0 0 0 5px',
  },

  '& .searchContainer': {
    display: 'flex',

    '& ._grid': {
      flex: '1',
    },
  },
}))
export default StyledInvoicePayment
