import { Field, Form, Formik } from 'formik'
import AppButton from '../../../components/common/AppButton/AppButton.styles'
import Logic from './logic'
import { Grid } from '@mui/material'
import FileUpload from '../../../components/common/FileUpload/FileUpload.styles'
import { useState } from 'react'
import * as Yup from 'yup'
import { maxFilesSizes } from '../../../utils/constants/config'
import { TextField } from 'formik-mui'

const CreateInvoice = ({ className, pagePermissions }) => {
  console.log(pagePermissions)
  const { handleClick, state } = Logic()
  const [FileType, setFileType] = useState('')
  const [file, setFile] = useState(null)

  return (
    <div className={className}>
      CreateInvoice
      {state.test}
      <button onClick={handleClick}>update</button>
      <AppButton onClick={handleClick}>update</AppButton>
    </div>
  )
}

export default CreateInvoice
