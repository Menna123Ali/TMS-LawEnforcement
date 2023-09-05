import React from 'react'
import { Field, Form, Formik } from 'formik'
import { INITIAL_VALUES, validationSchema } from './constatnts'
import { Box, Grid, TextField } from '@mui/material'
import AppField from '../../../../components/common/AppField/AppField'
import FormikAutocomplete from '../../../../components/common/FormikAutocomplete/FormikAutocomplete'
import FileUpload from '../../../../components/common/FileUpload/FileUpload.styles'
import AppButton from '../../../../components/common/AppButton/AppButton'
import Logic from './logic'

const InvoicePayment = ({ className, data, onPaySuccess = (e) => {}, onReset = () => {}, resetButtonLabel = 'Reset' }) => {
  const { PaymentMethodOptions, isSubmitting, invoiceInfo, setFile, setFileType, isGenerating, handlePrintInvoice, handleSubmit } = Logic(data, onPaySuccess)
  return (
    <div className={className}>
      {!invoiceInfo ? (
        <>
          <h4>Payment Details</h4>
          <Formik initialValues={INITIAL_VALUES} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, setFieldValue, values }) => (
              <Form>
                <div className="searchContainer">
                  <div className="_grid">
                    <Grid container justify="start" flex={1} spacing={2} style={{ padding: '10px 0px' }}>
                      <Grid item sm={4} xs={12}>
                        <AppField disabled label="Invoice Number" variant="outlined" value={data?.sInvoiceNumber} fullWidth />
                      </Grid>
                      {data?.sVin && (
                        <Grid item sm={4} xs={12}>
                          <AppField disabled label="Vin" variant="outlined" value={data?.sVin} fullWidth />
                        </Grid>
                      )}
                      {data?.sPlateNumber && (
                        <Grid item sm={4} xs={12}>
                          <AppField disabled label="Plate #" variant="outlined" value={data?.sPlateNumber} fullWidth />
                        </Grid>
                      )}
                      <Grid item sm={4} xs={12}>
                        <AppField disabled label="Total Amount" variant="outlined" value={data?.invoiceTotalPrice} fullWidth />
                      </Grid>
                    </Grid>
                    <Grid container justify="start" flex={1} spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <AppField disabled={false} name="Paymethod" className="required" label="Payment type" component={FormikAutocomplete} options={PaymentMethodOptions} getOptionLabel={(option) => (option.sInvoicePaymentMethodNameEn ? option.sInvoicePaymentMethodNameEn : '')} />
                      </Grid>

                      {values.Paymethod?.bIsVoucherRequire && (
                        <Grid item sm={4} xs={12}>
                          <AppField name="KIRSReceiptNumber" label="KIRS Receipt Number" variant="outlined" fullWidth error={touched.KIRSReceiptNumber && !!errors.KIRSReceiptNumber} helperText={touched.KIRSReceiptNumber && errors.KIRSReceiptNumber} />
                        </Grid>
                      )}

                      <Grid item sm={4} xs={12}>
                        <AppField name="paymentReference" label="Payment Reference" variant="outlined" fullWidth error={touched.paymentReference && !!errors.paymentReference} helperText={touched.paymentReference && errors.paymentReference} />
                      </Grid>

                      <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Field name="attachReceipt" component={FileUpload} title="Attach Receipt" setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} helperText={touched.attachReceipt && errors.attachReceipt} errorMessage={errors.attachReceipt ? errors.attachReceipt : undefined} />
                      </Grid>

                      <Grid item sm={12} xs={12}>
                        <Box display="flex" justifyContent="end">
                          <AppButton disabled={isSubmitting} type="submit" style={{ minWidth: '120px' }} className="searchButton">
                            {isSubmitting ? 'Loading...' : 'Pay'}
                          </AppButton>

                          <AppButton onClick={onReset} variant="outlined" color="error" size="large" type="button" className="searchButton">
                            {resetButtonLabel}
                          </AppButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <div className="searchContainer">
          <div className="_grid">
            <Grid container justify="start" flex={1} spacing={2} style={{ padding: '10px 0px' }}>
              <Grid item sm={4} xs={12}>
                <TextField disabled label="Invoice #" variant="outlined" value={invoiceInfo?.invoice?.sInvoiceNumber} fullWidth />
              </Grid>

              {invoiceInfo?.invoice?.sVoucherNumber && (
                <Grid item sm={4} xs={12}>
                  <TextField disabled label="Voucher #" value={invoiceInfo?.invoice?.sVoucherNumber} variant="outlined" fullWidth />
                </Grid>
              )}
              <Grid item sm={4} xs={12}>
                <TextField disabled label="Total Fees" value={data?.invoiceTotalPrice} variant="outlined" fullWidth />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Box display="flex" justifyContent="end">
                  <AppButton disabled={isGenerating} type="button" onClick={handlePrintInvoice} className="searchButton">
                    {isGenerating ? 'Generating' : 'Print Invoice'}
                  </AppButton>

                  <AppButton onClick={onReset} variant="outlined" color="error" type="button" className="searchButton">
                    {resetButtonLabel}
                  </AppButton>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  )
}

export default InvoicePayment
