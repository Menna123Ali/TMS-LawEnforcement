import { styled } from '@mui/material'
import PDFViewer from './PDFViewer'

const StyledPDFViewer = styled(PDFViewer)(({ theme }) => ({
  '& .reactDisplayCenter': {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  '& .paragraphBottom': {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
}))

export default StyledPDFViewer
