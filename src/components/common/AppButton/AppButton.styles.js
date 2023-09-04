import { styled } from '@mui/material'
import AppButton from './AppButton'

const StyledButton = styled(AppButton)(({ theme }) => ({
  margin: '0 0 0 auto',
  flexShrink: 0,
  minHeight: '50px',
  minWidth: '197px',
}))

export default StyledButton
