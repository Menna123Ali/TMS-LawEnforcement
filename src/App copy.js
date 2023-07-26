import { Button, Grid, ThemeProvider } from '@mui/material'
import printJS from 'print-js'
import React, { useState } from 'react'
import logo from './assets/images/logo512.png'
// import Test from './pages/test/test'
import { theme } from './assets/styles/theme'

import FileUpload from './components/common/FileUpload'
import { Field, Form, Formik } from 'formik'
function App() {
  const [FileType, setFileType] = useState('')
  const [file, setFile] = useState(null)
  const [fieldValue, setFieldValue] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <button type="button" onClick={() => printJS(logo, 'image')}>
        Print PDF with Message
      </button>
      <Formik initialValues={{ attachReceipt: '' }} onSubmit={(values) => {}}>
        {({ errors, touched, setFieldValue, values, resetForm, dirty }) => (
          <Form>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Field name="attachReceipt" component={FileUpload} title="Attach Receipt" setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} helpertext={touched.attachReceipt && errors.attachReceipt} errorMessage={errors.attachReceipt ? errors.attachReceipt : undefined} />
            </Grid>
          </Form>
        )}
      </Formik>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        {/* <Test /> */}
        {/* <FileUpload setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} /> */}
      </Grid>
    </ThemeProvider>
  )
}

export default App
