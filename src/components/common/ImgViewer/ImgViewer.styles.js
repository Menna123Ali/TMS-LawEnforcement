import { styled } from '@mui/material'
import ImgViewer from './ImgViewer'

const StyledImgViewer = styled(ImgViewer)(({ theme }) => ({
  '&  .img': {
    display: 'block',
    width: '100%',
    position: 'relative',
    zIndex: 5,
  },
  '&  .imgXL': {
    display: 'block',
    maWidth: '90vw',
    maxHeight: '90vh',
    zIndex: 5,
  },
  '&  .modal': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&  .paper': {
    backgroundColor: '#f5f5f5',
    boxShadow: theme.shadows[2],
    padding: '2px',
    outline: 'none',
    borderRadius: '0',

    '& img': {
      borderRadius: '0',
    },
  },
  '&  .card': {
    boxShadow: 'none',
    borderRadius: '0',
  },
  '& .cardContent': {
    padding: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    background: 'transparent',
    position: 'relative',
  },
  '& .skeleton': {
    width: '100%',
    height: '100px',
  },
}))

export default StyledImgViewer
