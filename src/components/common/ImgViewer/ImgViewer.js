import React, { useState } from 'react'
import { Card, CardContent, CardActionArea, Backdrop, Fade, Skeleton } from '@mui/material'
import { StyledModal } from './ImgViewer.styles'

const ImgViewer = ({ imagePreviewUrl, className }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={className}>
      <>
        <Card className={'card'}>
          <CardActionArea onClick={handleOpen}>
            <CardContent className={'cardContent'}>{imagePreviewUrl ? <img className={'img'} src={imagePreviewUrl} alt="..." /> : <Skeleton className={'skeleton'} variant="rect" />}</CardContent>
          </CardActionArea>
        </Card>
        <StyledModal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={'modal'} open={open} onClose={handleClose} closeAfterTransition>
          <Fade in={open}>
            <div className={'paper'}>{imagePreviewUrl ? <img className={'imgXL'} src={imagePreviewUrl} alt="..." /> : <Skeleton className={'skeleton'} variant="rect" />}</div>
          </Fade>
        </StyledModal>
        <Backdrop open={open} timeout={500} onClick={handleClose} />
      </>
    </div>
  )
}

export default ImgViewer
