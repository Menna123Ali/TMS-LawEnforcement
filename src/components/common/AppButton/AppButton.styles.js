import { styled } from '@mui/material'
import AppButton from './AppButton'

const StyledButton = styled(AppButton)(({ theme, minWidth }) => ({
  margin: '0 0 0 auto',
  flexShrink: 0,
  minHeight: '50px',

  minWidth: minWidth ? `${minWidth} px` : '197px',
}))

export default StyledButton
