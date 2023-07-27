import React, { useState, useRef } from 'react'
import { Avatar, Button, FormControl, FormHelperText, TextField } from '@mui/material'
import { CloudUpload as CloudUploadIcon, Scanner as ScannerIcon } from '@mui/icons-material'
import clsx from 'clsx'
// import { AppContext, validateAgentVersion } from '../../../../App'
import emptyImg from '../../../assets/images/emptyImg.png'
import PDFViewver from '../PDFViewer/PDFViewer'
import ImgViewer from '../ImgViewer/ImgViewer'

const FileUpload = (props) => {
  const { className } = props
  console.log('className', className)
  // const { appState } = useContext(AppContext)
  const canvasRef = useRef()
  const fileUpload = React.createRef()
  // const classes = useStyles()
  const [file, setFile] = useState(undefined)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined)
  const [showClear, setShowClear] = useState('none')
  // const { appDispatch } = React.useContext(AppContext)
  const handleImageChange = (e, action) => {
    e.preventDefault()
    if (action === 'upload') {
      let reader = new FileReader()
      let file = e.target.files[0]
      if (file) {
        reader.onloadend = () => {
          setFile(file)
          props.setFile(file)
          // if (appState.supportedFilesFormat.includes(file.type)) setImagePreviewUrl(reader.result)
          if (true) setImagePreviewUrl(reader.result)
          else setImagePreviewUrl(emptyImg)
          props.setFieldValue(props.field.name, reader.result)
          props.setFileType(file.type)
        }

        reader.readAsDataURL(file)
        setShowClear('block')
      }
    } else {
      // validateAgentVersion(ReadFile, appDispatch)
      // function ReadFile() {
      //   var scan = 'scan'
      //   var ws = new WebSocket('ws://localhost:8181')
      //   ws.onopen = function () {
      //     ws.send(scan) // I WANT TO SEND THIS MESSAGE TO THE SERVER!!!!!!!!
      //   }
      //   ws.onmessage = function (evt) {
      //     var received_msg_uploadPhoto = evt.data
      //     if (received_msg_uploadPhoto.startsWith('Error')) {
      //       props.setFieldValue(props.field.name, undefined)
      //       setImagePreviewUrl(undefined)
      //       props.setFileType(null)
      //     } else {
      //       setShowClear('block')
      //       props.setFieldValue(props.field.name, 'data:image/png;base64, ' + received_msg_uploadPhoto)
      //       setImagePreviewUrl('data:image/png;base64, ' + received_msg_uploadPhoto)
      //       props.setFileType('image/png')
      //     }
      //     ws.close()
      //   }
      //   ws.onclose = function () {}
      //   ws.onerror = function (error) {}
      //   ws.addEventListener('error', function (event) {
      //     //
      //   })
      // }
    }
  }

  const { errorMessage, title } = props
  const { name } = props.field

  const showPreloadImage = () => {
    let comp = null

    if (props.form.values[name] && file?.type == 'application/pdf') {
      return <PDFViewver imagePreviewUrl={imagePreviewUrl} canvasRef={canvasRef} />
    } else if (props.form.values[name]) {
      return <ImgViewer imagePreviewUrl={imagePreviewUrl ?? `data:image/jpeg;base64,${props.form.values[name]}`} />
    } else if (file) {
      return <ImgViewer imagePreviewUrl={imagePreviewUrl} />
    } else {
    }
    return comp
  }

  const avatarStyle = clsx('bigAvatar', file || props.form.values[name] ? 'primaryBack' : 'primaryBack', {
    errorBack: errorMessage,
  })

  const handleClear = () => {
    setShowClear('none')

    props.setFieldValue(props.field.name, '')
    setImagePreviewUrl(undefined)
    setFile(undefined)

    props.setFile(null)
    props.setFileType(null)
  }

  return (
    <>
      <div className={className}>
        {showPreloadImage()}
        <FormControl fullWidth error={errorMessage}>
          <div style={{ display: 'flex', flex: '1', justifyContent: 'space-between' }}>
            <Button variant="contained" component="label" fullWidth className={'buttonScan'} type="button">
              <Avatar className={avatarStyle}>
                {' '}
                <ScannerIcon />
              </Avatar>
              <span>{title}</span>
              <TextField
                onClick={(event) => {
                  event.target.value = null
                  handleImageChange(event, 'scan')
                }}
                className={'hidden'}
                id={name}
                name={name}
                type="file"
                ref={fileUpload}
                style={{ display: 'none' }}
                helperText={errorMessage}
              />
            </Button>
            <Button variant="contained" component="label" className={'buttonUpload'} type="button">
              <Avatar className={avatarStyle}>
                <CloudUploadIcon />
              </Avatar>
              <input
                onClick={(event) => {
                  event.target.value = null
                }}
                className={'hidden'}
                id={name}
                name={name}
                type="file"
                // accept={appState.supportedFilesFormat}
                onChange={(event) => {
                  handleImageChange(event, 'upload')
                }}
                ref={fileUpload}
                style={{ display: 'none' }}
                helperText={errorMessage}
              />
            </Button>
          </div>

          <Button style={{ display: showClear, textAlign: 'left' }} onClick={() => handleClear()}>
            Clear File
          </Button>

          {errorMessage && <FormHelperText id="passport-copy">{errorMessage}</FormHelperText>}
        </FormControl>
      </div>
    </>
  )
}

export default FileUpload
