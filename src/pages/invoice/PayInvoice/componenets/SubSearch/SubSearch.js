import { Box, CircularProgress, Grid, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { initialState, validateSchema } from '../../constants'
import { useRef } from 'react'
import AppField from '../../../../../components/common/AppField/AppField.styles'
import Logic from './logic'
import AppButton from '../../../../../components/common/AppButton/AppButton'

const SubSearch = ({ className }) => {
  const { formRef, isAddLoading, onSubmitHandler } = Logic()

  return (
    <div className={className}>
      <Formik enableReinitialize={false} innerRef={formRef} validationSchema={validateSchema} initialValues={initialState} onSubmit={onSubmitHandler}>
        {({ touched, errors, resetForm, setFieldValue, values, validateForm, submitForm }) => {
          return (
            <Form>
              <div className="searchContainer">
                <div className="_grid">
                  <Grid container justify="flex-start" flex={1} spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          as={TextField}
                          onChange={(e) => {
                            setFieldValue('invoiceNumber', e.target.value)
                          }}
                          name="invoiceNumber"
                          label="Invoice Number"
                          variant="outlined"
                          fullWidth
                          error={touched.invoiceNumber && !!errors.invoiceNumber}
                          helperText={touched.invoiceNumber && errors.invoiceNumber}
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          as={TextField}
                          onChange={(e) => {
                            setFieldValue('customerName', e.target.value)
                          }}
                          name="customerName"
                          label="Customer Name"
                          variant="outlined"
                          fullWidth
                          error={touched.customerName && !!errors.customerName}
                          helperText={touched.customerName && errors.customerName}
                        />
                      </Grid>
                      <Grid item sm={4} xs={12}>
                        <AppField
                          as={TextField}
                          onChange={(e) => {
                            setFieldValue('customerPhone', e.target.value)
                          }}
                          name="customerPhone"
                          label="Customer Phone"
                          variant="outlined"
                          fullWidth
                          error={touched.customerPhone && !!errors.customerPhone}
                          helperText={touched.customerPhone && errors.customerPhone}
                        />
                      </Grid>

                    <Grid item sm={12} xs={12}>
                      <Box display="flex" className='submit-btn-container'>
                        <AppButton disabled={isAddLoading} type="submit">
                          {isAddLoading ? 'Loading...' : 'Search'}
                        </AppButton>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
export default SubSearch
