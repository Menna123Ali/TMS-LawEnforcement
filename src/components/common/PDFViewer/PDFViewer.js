import React, { useState } from 'react'
import { Card, CardContent, CardActionArea, Modal, Backdrop, Fade, Box, Button } from '@mui/material'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const PDFViewer = ({ imagePreviewUrl, canvasRef, className }) => {
  const [open, setOpen] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const goToPrevPage = () => setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () => setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)
  const handleText = (e) => {
    if (+e.target.value > 0) {
      setPageNumber(e.target.value >= numPages ? numPages : +e.target.value)
    } else {
      setPageNumber(1)
    }
  }

  return (
    <div className={className}>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Document file={imagePreviewUrl}>
              <Page height={200} canvasRef={canvasRef} className="rounded overflow-hidden shadow-lg " renderTextLayer={false} pageNumber={1} />
            </Document>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <nav className={'reactDisplayCenter'}>
              <Box m={0.5}>
                <Button onClick={goToPrevPage} variant="contained">
                  Prev
                </Button>
              </Box>
              <Box m={0.5}>
                <input type="number" style={{ height: 40 }} placeholder="input a number for search" onChange={handleText} />
              </Box>
              <Box m={0.5}>
                <Button onClick={goToNextPage} variant="contained">
                  Next
                </Button>
              </Box>

              <p className={'paragraphBottom'}>
                Page {pageNumber} of {numPages}
              </p>
            </nav>
            <Document file={imagePreviewUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}></Page>
            </Document>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default PDFViewer
