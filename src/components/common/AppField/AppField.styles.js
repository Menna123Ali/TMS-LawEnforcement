import { styled } from '@mui/material'
import AppField from './AppField'

const StyledAppField = styled(AppField)(({ theme, height }) => ({
  '& .MuiInputBase-root': { height: height ? height : 50 },
}))

export default StyledAppField
