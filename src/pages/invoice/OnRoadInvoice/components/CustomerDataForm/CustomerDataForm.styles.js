import { styled } from '@mui/material'
import CustomerDataForm from './CustomerDataForm'

const StyledCustomerDataForm = styled(CustomerDataForm)(({ theme }) => ({
  '& .searchContainer': {
    display: 'flex',

    '& ._grid': {
      flex: '1',
    },
  },
  '& .tableContainer': {
    [theme.breakpoints.down('sm')]: {
      '&': { border: 0, boxShadow: 'none' },
    },
  },
}))
export default StyledCustomerDataForm
