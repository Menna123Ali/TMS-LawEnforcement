import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, makeStyles } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import FormikAutocomplete from './FormikAutocomplete'
import Axios from 'axios'
import * as Yup from 'yup'
import { AppContext, GetCacheVersion, currentEnvURL } from '../../../../App'
import FileUpload from '../../../../components/FileUpload'
import { useLocation } from 'react-router-dom'
import printJS from 'print-js'

const useStyles = makeStyles((theme) => ({
  searchButton: {
    //   width: '120px',
    minHeight: '52px',
    margin: '0 0 0 5px',
  },
  searchFormWrap: {
    margin: `-${theme.spacing(3)}px -${theme.spacing(3)}px 14px -${theme.spacing(3)}px`,
    background: '#fff',
    padding: theme.spacing(3),
  },
  searchContainer: {
    display: 'flex',

    '& ._grid': {
      flex: '1',
    },
  },
}))
const InvoicePayment = ({ data, onPaySuccess = (e) => {}, onReset = () => {}, resetButtonLabel = 'Reset' }) => {
  const classes = useStyles()
  const [PaymentMethodOptions, setPaymentMethodOptions] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [FileType, setFileType] = useState('')
  const [file, setFile] = useState(null)
  const [voucherFileType, setVoucherFileType] = useState('')
  const [voucherFile, setVoucherFile] = useState(null)
  const [invoiceInfo, setInvoiceInfo] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const { appDispatch, appState } = useContext(AppContext)
  const location = useLocation()
  const [paymentSelected, setPaymentSelected] = useState(null)

  console.log('test_data', data)

  const INITIAL_VALUES = {
    paymentReference: '',
    attachReceipt: '',
    Paymethod: '',
    KIRSReceiptNumber: '',
    attachVoucher: '',
  }

  const handlePrintInvoice = async () => {
    setIsGenerating(true)

    try {
      let response = await fetch(`${currentEnvURL.reportApi}Export/NewInvoiceReport?reportParamsURL=InvoiceId:${data?.nInvoiceId};`, {
        method: 'Get',
        headers: new Headers({
          Authorization: `Bearer ${appState.token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
      let reportData = await response.blob()
      var pdfUrl = URL.createObjectURL(reportData)
      printJS(pdfUrl)
    } catch (e) {
      // setIsSubmitting(false)
      var msg = 'Server Request Failed'
      if (e.response != null && e.response.data != null && !e.response.data.errors) {
        msg = e.response.data
      }
      appDispatch({ type: 'FLASHMESSAGE', flashMessage: msg, flashMessageType: 'error' })
    } finally {
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function callPaymentMethod() {
      const response = await Axios(
        {
          method: 'post',
          url: '/api/Invoice/GetInvoicePaymentMethod?ver=' + GetCacheVersion('/api/Invoice/GetInvoicePaymentMethod'),
        },
        { cancelToken: ourRequest.token }
      )
        .then(function (response) {
          if (response.data) {
            setPaymentMethodOptions(response.data)
          } else {
            appDispatch({
              type: 'FLASHMESSAGE',
              flashMessage: 'Failed to load Application Type',
              flashMessageType: 'error',
            })
          }
        })
        .catch((e) => {
          var msg = 'Server Request Failed'
          if (!!e.response && !!e.response.data) {
            msg = e.response.data
          }
          appDispatch({
            type: 'FLASHMESSAGE',
            flashMessage: msg,
            flashMessageType: 'error',
          })
        })
    }
    callPaymentMethod()
  }, [])

  return (
    <div className={classes.searchFormWrap}>
      {!invoiceInfo ? (
        <>
          <h4>Payment Details</h4>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={Yup.object().shape({
              Paymethod: Yup.object().required('This field is required').nullable(),
              attachReceipt: Yup.mixed()
                .when('Paymethod', {
                  is: (val) => val?.bIsReceiptRequired,
                  then: Yup.mixed()
                    .required('A file is required')
                    .test('fileSize', 'File too large, max allowed size is ' + appState.maxFilesSizes.dl.attach / 1000 + ' KB', (value) => (value?.size > 0 ? value.size : value?.replace(/=/g, '').length * 0.75) < parseInt(appState.maxFilesSizes.dl.attach)),
                })
                .nullable(),
              paymentReference: Yup.mixed()
                .when('Paymethod', {
                  is: (val) => val?.bIsReceiptNumberRequired,
                  then: Yup.string().required('This field is required'),
                })
                .nullable(),
              // attachVoucher: Yup.mixed()
              //   .when('Paymethod', {
              //     is: (val) => val?.bIsVoucherRequire,
              //     then: Yup.mixed()
              //       .required('A file is required')
              //       .test('fileSize', 'File too large, max allowed size is ' + appState.maxFilesSizes.dl.attach / 1000 + ' KB', (value) => (value?.size > 0 ? value.size : value?.replace(/=/g, '').length * 0.75) < parseInt(appState.maxFilesSizes.dl.attach)),
              //   })
              //   .nullable(),
              KIRSReceiptNumber: Yup.mixed()
                .when('Paymethod', {
                  is: (val) => val?.bIsVoucherNumberRequired,
                  then: Yup.string().required('This field is required'),
                })
                .nullable(),
            })}
            onSubmit={(values) => {
              console.log('values', values)
              async function callInvoicePayment() {
                setIsSubmitting(true)
                let tbliInvoiceAttachmentImages = []
                if (values.attachReceipt) {
                  tbliInvoiceAttachmentImages = [
                    ...tbliInvoiceAttachmentImages,
                    {
                      nInvoiceId: data?.nInvoiceId,
                      nInvoiceAttachmentTypeId: 1,
                      sAttachmentName: file?.name ?? 'InvoiceReceipt.png',
                      TbliInvoiceAttachmentImages: [
                        {
                          binAttachmentsImage: values.attachReceipt?.split(',')[1]?.trim(),
                          NAttachmentsImageType: FileType.trim(),
                        },
                      ],
                    },
                  ]
                }
                if (values.attachVoucher) {
                  tbliInvoiceAttachmentImages = [
                    ...tbliInvoiceAttachmentImages,
                    {
                      nInvoiceId: data?.nInvoiceId,
                      nInvoiceAttachmentTypeId: 2,
                      sAttachmentName: voucherFile?.name ?? 'InvoiceReceipt.png',
                      TbliInvoiceAttachmentImages: [
                        {
                          binAttachmentsImage: values.attachVoucher?.split(',')[1]?.trim(),
                          NAttachmentsImageType: voucherFileType.trim(),
                        },
                      ],
                    },
                  ]
                }
                const response = await Axios({
                  method: 'POST',
                  url: '/api/Invoice/PayWithAttachReceiptForInvoice',
                  data: {
                    invoice: {
                      nInvoiceId: data?.nInvoiceId,
                      sReceiptNumber: values.paymentReference,
                      nActualPaymentMethod: values.Paymethod.nInvoicePaymentMethodId,
                      sVoucherNumber: values.KIRSReceiptNumber,
                    },
                    invoiceAttachments: tbliInvoiceAttachmentImages,
                  },
                  params: {
                    root: location.pathname,
                  },
                })
                  .then(function (response) {
                    setIsSubmitting(false)
                    if (response.data) {
                      appDispatch({
                        type: 'FLASHMESSAGE',
                        flashMessage: 'Invoice #' + response.data.model.invoice.sInvoiceNumber + ' Paid Successfuly',
                        flashMessageType: 'success',
                      })
                      //   setResults(null)
                      onPaySuccess(response.data.model)
                      setInvoiceInfo(response.data.model)
                    } else {
                      appDispatch({
                        type: 'FLASHMESSAGE',
                        flashMessage: 'Failed to Pay Invoice',
                        flashMessageType: 'error',
                      })
                      setIsSubmitting(false)
                    }
                  })
                  .catch((e) => {
                    setIsSubmitting(false)
                    var msg = 'Server Request Failed'
                    if (e.response != null && e.response.data != null && !e.response.data.errors) {
                      msg = e.response.data
                    }
                    appDispatch({
                      type: 'FLASHMESSAGE',
                      flashMessage: msg,
                      flashMessageType: 'error',
                    })
                    ////resetForm()
                  })
              }
              callInvoicePayment()
            }}
          >
            {({ errors, touched, setFieldValue, values, resetForm, dirty }) => (
              <Form>
                <div className={classes.searchContainer}>
                  <div className="_grid">
                    <Grid container justify="start" flex={1} spacing={2} style={{ padding: '10px 0px' }}>
                      <Grid item sm={4} xs={12}>
                        <TextField disabled label="Invoice Number" variant="outlined" value={data?.sInvoiceNumber} fullWidth />
                      </Grid>
                      {data?.sVin && (
                        <Grid item sm={4} xs={12}>
                          <TextField disabled label="Vin" variant="outlined" value={data?.sVin} fullWidth />
                        </Grid>
                      )}
                      {data?.sPlateNumber && (
                        <Grid item sm={4} xs={12}>
                          <TextField disabled label="Plate #" variant="outlined" value={data?.sPlateNumber} fullWidth />
                        </Grid>
                      )}
                      <Grid item sm={4} xs={12}>
                        <TextField disabled label="Total Amount" variant="outlined" value={data?.invoiceTotalPrice} fullWidth />
                      </Grid>
                    </Grid>
                    <Grid container justify="start" flex={1} spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <Field
                          disabled={false}
                          name="Paymethod"
                          className="required"
                          label="Payment type"
                          component={FormikAutocomplete}
                          options={PaymentMethodOptions}
                          getOptionLabel={(option) => (option.sInvoicePaymentMethodNameEn ? option.sInvoicePaymentMethodNameEn : '')}
                          textFieldProps={{
                            fullWidth: true,
                            variant: 'outlined',
                          }}
                          error={touched.Paymethod && !!errors.Paymethod}
                          helperText={touched.Paymethod && errors.Paymethod}
                          // setChangeEvent={(value) => {
                          //   console.log('testSelectedPayment', value)
                          //   setPaymentSelected(value)
                          // }}
                        />
                      </Grid>

                      {values.Paymethod?.bIsVoucherRequire && (
                        <Grid item sm={4} xs={12}>
                          <Field as={TextField} name="KIRSReceiptNumber" label="KIRS Receipt Number" variant="outlined" fullWidth error={touched.KIRSReceiptNumber && !!errors.KIRSReceiptNumber} helperText={touched.KIRSReceiptNumber && errors.KIRSReceiptNumber} />
                        </Grid>
                      )}

                      <Grid item sm={4} xs={12}>
                        <Field as={TextField} name="paymentReference" label="Payment Reference" variant="outlined" fullWidth error={touched.paymentReference && !!errors.paymentReference} helperText={touched.paymentReference && errors.paymentReference} />
                      </Grid>

                      <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Field name="attachReceipt" component={FileUpload} title="Attach Receipt" setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} helperText={touched.attachReceipt && errors.attachReceipt} errorMessage={errors.attachReceipt ? errors.attachReceipt : undefined} />
                      </Grid>

                      {/* {values.Paymethod?.bIsVoucherRequire && (
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                          <Field name="attachVoucher" component={FileUpload} title="Attach Voucher" setFileType={setVoucherFileType} setFile={setVoucherFile} setFieldValue={setFieldValue} helperText={touched.attachVoucher && errors.attachVoucher} errorMessage={errors.attachVoucher ? errors.attachVoucher : undefined} />
                        </Grid>
                      )} */}

                      <Grid item sm={12} xs={12}>
                        <Box display="flex" justifyContent="end">
                          <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" size="large" style={{ minWidth: '120px' }} className={classes.searchButton}>
                            {isSubmitting ? 'Loading...' : 'Pay'}
                          </Button>

                          <Button onClick={onReset} variant="outlined" color="secondary" size="large" type="button" className={classes.searchButton}>
                            {resetButtonLabel}
                          </Button>
                        </Box>
                      </Grid>
                      {/* <Grid item sm={12} xs={12}>
                      <Box display="flex" justifyContent="end">
                        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" size="large" style={{ minWidth: '120px' }} className={classes.searchButton}>
                          {isSubmitting ? 'Loading...' : 'Pay'}
                        </Button>
                      </Box>
                    </Grid> */}
                    </Grid>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <div className={classes.searchContainer}>
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
                  <Button disabled={isGenerating} type="button" onClick={handlePrintInvoice} variant="contained" color="primary" size="large" className={classes.searchButton}>
                    {isGenerating ? 'Generating' : 'Print Invoice'}
                  </Button>

                  <Button onClick={onReset} variant="outlined" color="secondary" size="large" type="button" className={classes.searchButton}>
                    {resetButtonLabel}
                  </Button>
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
