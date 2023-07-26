import { styled } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FileUpload from './FileUpload'

const StyledFileUpload = styled(FileUpload)(({ theme }) => ({
  textAlign: 'center',
  '&  .bigAvatar': {
    margin: '0 10px 0 0',
    width: 35,
    height: 35,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  '&  .hidden': {
    display: 'none',
  },
  '&  .buttonScan': {
    textTransform: 'initial',
    display: 'flex',
    justifyContent: 'initial',
    padding: '10px 16px',
    fontSize: '16px',
    fontWeight: 600,
    marginRight: '5px',
    borderRight: '1px solid',
  },
  '&  .buttonUpload': {
    textTransform: 'initial',
    display: 'flex',
    justifyContent: 'initial',
    fontSize: '12px',
    fontWeight: 600,
  },
  '&  .title': {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  '& .avatarThumb': {
    maxWidth: '300px',
    width: 'auto',
    height: '200px',
  },
  '& .primaryBack': {
    background: theme.palette.primary.main,
  },
  '& .whiteBack': {
    background: 'white',
    borderColor: theme.palette.success.main,
  },
  '& .errorBack': {
    background: alpha(theme.palette.error.main, 0.5),
    borderColor: 'red',
  },
}))

export default StyledFileUpload
