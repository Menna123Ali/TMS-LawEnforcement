import { styled } from '@mui/material'
import CreateInvoice from './CreateInvoice'

const StyledCreateInvoice = styled(CreateInvoice)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '60px',
}))
export default StyledCreateInvoice
