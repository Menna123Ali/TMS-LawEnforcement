import React from 'react'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { CloudUpload as CloudUploadIcon, Scanner as ScannerIcon } from '@mui/icons-material'
import AppButton from '../AppButton/AppButton'
import { supportedFilesFormat } from '../../../utils/constants/config'
import PreloadImage from './PreloadImage'
import { StyledAvatar } from './FileUpload.styles'
import Webcam from 'react-webcam'
import Logic from './logic'

const FileUpload = (props) => {
  const { className, errorMessage, title } = props
  const { name } = props.field
  const fileUpload = React.createRef()

  const { webcamRef, imagePreviewUrl, showClear, file, showWebCam, handleImageUpload, handleClear, handleImageScan, capture } = Logic(props)

  return (
    <>
      <div className={className}>
        {showWebCam && (
          <div className="cameraView">
            <Webcam
              audio={false}
              ref={webcamRef}
              width={'100%'}
              height={'100%'}
              videoConstraints={{
                facingMode: { exact: 'environment' },
              }}
              screenshotQuality={'1'}
            />
            <button className="captureButton" onClick={capture} type="button"></button>
          </div>
        )}
        <PreloadImage value={props.form.values[name]} file={file} imagePreviewUrl={imagePreviewUrl} />
        <FormControl fullWidth error={!!errorMessage}>
          <div style={{ display: 'flex', flex: '1', justifyContent: 'space-between' }}>
            <AppButton color="lightgrey" component="label" fullWidth className={'buttonScan'} type="button">
              <StyledAvatar isError={!!errorMessage}>
                <ScannerIcon />
              </StyledAvatar>
              <span>{title}</span>
              <TextField
                onClick={(event) => {
                  event.target.value = null
                  handleImageScan(event)
                }}
                className={'hidden'}
                id={name}
                name={name}
                type="file"
                ref={fileUpload}
                style={{ display: 'none' }}
                helperText={errorMessage}
              />
            </AppButton>
            <AppButton color="lightgrey" component="label" className={'buttonUpload'} type="button">
              <StyledAvatar isError={!!errorMessage}>
                <CloudUploadIcon />
              </StyledAvatar>
              <input
                onClick={(event) => {
                  event.target.value = null
                }}
                className={'hidden'}
                id={name}
                name={name}
                type="file"
                accept={supportedFilesFormat}
                onChange={(event) => {
                  handleImageUpload(event)
                }}
                ref={fileUpload}
                style={{ display: 'none' }}
                helpertext={errorMessage}
              />
            </AppButton>
          </div>

          {showClear && (
            <AppButton variant="text" style={{ display: 'block', textAlign: 'left' }} onClick={() => handleClear()}>
              Clear File
            </AppButton>
          )}

          {errorMessage && <FormHelperText id="passport-copy">{errorMessage}</FormHelperText>}
        </FormControl>
      </div>
    </>
  )
}

export default FileUpload
