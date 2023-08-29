import { Avatar, styled } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FileUpload from './FileUpload'

const StyledFileUpload = styled(FileUpload)(({ theme }) => ({
  textAlign: 'center',

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

  '& .whiteBack': {
    background: 'white',
    borderColor: theme.palette.success.main,
  },

  '& >.cameraView': {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& >.captureButton': {
      position: 'absolute',
      bottom: 30,
      left: '50%',
      width: 50,
      transform: 'translateX(-50%)',
      height: 50,
      borderRadius: '50%',
      background: '#FFF',
    },
  },
}))

export const StyledAvatar = styled(Avatar)(({ theme, errormessage }) => ({
  margin: '0 10px 0 0',
  width: 35,
  height: 35,
  border: `2px solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.main,
  ...(errormessage && {
    background: alpha(theme.palette.error.main, 0.5),
    borderColor: 'red',
  }),
}))

export default StyledFileUpload
