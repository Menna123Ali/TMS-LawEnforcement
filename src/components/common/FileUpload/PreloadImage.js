import { useRef } from 'react'
import ImgViewer from '../ImgViewer/ImgViewer.styles'
import PDFViewer from '../PDFViewer/PDFViewer.styles'

const PreloadImage = ({ value, file, imagePreviewUrl }) => {
  const canvasRef = useRef()
  if (value && file?.type == 'application/pdf') {
    return <PDFViewer imagePreviewUrl={imagePreviewUrl} canvasRef={canvasRef} />
  } else if (value) {
    return <ImgViewer imagePreviewUrl={imagePreviewUrl} />
  } else if (file) {
    return <ImgViewer imagePreviewUrl={imagePreviewUrl} />
  } else {
  }
  return null
}

export default PreloadImage
