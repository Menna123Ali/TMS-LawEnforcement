import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import Logic from './logic'
import { Form, Formik } from 'formik'
import { customerFormData, customerFormDataSchema } from '../../constants'
import AppField from '../../../../../components/common/AppField/AppField'
import AppPhoneMask from '../../../../../components/common/AppPhoneMask/AppPhoneMask'
import AppButton from '../../../../../components/common/AppButton/AppButton.styles'

const CustomerDataForm = ({ className }) => {
  const { formInvoiceRef, isCreateInvoiceLoading, isInvoiceCreated, onCreateInvoice, onReset } = Logic()

  return (
    <div className={className}>
      <Formik innerRef={formInvoiceRef} initialValues={customerFormData} validationSchema={customerFormDataSchema} onSubmit={onCreateInvoice}>
        {({ touched, errors, setFieldValue, values, validateForm, submitForm }) => {
          return (
            <Form>
              <div className="searchContainer">
                <div className="_grid">
                  <div style={{ marginBottom: '35px', gap: '85px' }}>
                    <b style={{ gap: '10px' }}></b>
                    <h4>Customer Data </h4>
                  </div>
                  <Grid container justify="flex-start" flex={1} spacing={2}>
                    <Grid item sm={4} xs={12}>
                      <AppField as={TextField} disabled={isInvoiceCreated} name="SCustomerName" className="required" label="Customer Name" variant="outlined" fullWidth error={touched.SCustomerName && !!errors.SCustomerName} helperText={touched.SCustomerName && errors.SCustomerName} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                      <AppField as={AppPhoneMask} disabled={isInvoiceCreated} setFieldValue={setFieldValue} className="required" label="Customer Phone" name="SCustomerPhone" variant="outlined" fullWidth error={touched.SCustomerPhone && !!errors.SCustomerPhone} helperText={touched.SCustomerPhone && errors.SCustomerPhone} autoComplete="off" />
                    </Grid>

                    {!isInvoiceCreated && (
                      <Grid item sm={12} xs={12}>
                        <Box display="flex" justifyContent={'flex-end'}>
                          <div>
                            <AppButton disabled={isCreateInvoiceLoading} type="submit" style={{ margin: '0 0 0 5px' }}>
                              {isCreateInvoiceLoading ? 'Loading...' : 'Create Invoice'}
                            </AppButton>
                          </div>
                          <div>
                            <AppButton onClick={onReset} variant="outlined" color="error" type="button" minWidth="auto" fullWidth style={{ margin: '0 0 0 5px' }}>
                              Reset
                            </AppButton>
                          </div>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
      <br></br>
    </div>
  )
}

export default CustomerDataForm
