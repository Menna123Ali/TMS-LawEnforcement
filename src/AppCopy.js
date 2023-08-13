import React, { useState } from 'react'
import { Grid, ThemeProvider } from '@mui/material'
import printJS from 'print-js'
// import Test from './pages/test/test'
import { theme } from './assets/styles/theme'

import FileUpload from './components/common/FileUpload/FileUpload'
import { Field, Form, Formik } from 'formik'
import FormikAutocomplete from './components/common/FormikAutocomplete/FormikAutocomplete'
import StyledButton from './components/common/AppButton/AppButton.styles'
import InactivityTimer from './components/InactivityComponent'
function App() {
  const [FileType, setFileType] = useState('')
  const [file, setFile] = useState(null)
  const [fieldValue, setFieldValue] = useState('')
  const cardTypeOptions = [
    {
      nServiceId: 25,
      nMainTypeId: 4,
      nTypeId: 12,
      sTitle: '306-Normal Number Plate',
      sDescription: 'Issue Normal Plate',
      fPrice: 5000,
      nServiceGroupId: 4,
      scode: '306',
      snameWithotCode: 'Normal Number Plate',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: false,
      nViewOrder: -1,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 4,
      nMainTypeId: 2,
      nTypeId: 1,
      sTitle: '101-New Vehicle Registration',
      sDescription: 'Create New Vehicle License',
      fPrice: null,
      nServiceGroupId: 1,
      scode: '101',
      snameWithotCode: 'New Vehicle Registration',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: true,
      nViewOrder: 1,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 19,
      nMainTypeId: 4,
      nTypeId: 1,
      sTitle: '301-Fancy Number Plate',
      sDescription: 'Issue new fancy plate',
      fPrice: 200,
      nServiceGroupId: 4,
      scode: '301',
      snameWithotCode: 'Fancy Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 1,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 26,
      nMainTypeId: 2,
      nTypeId: 13,
      sTitle: '102-Pre-Registered Vehicle',
      sDescription: 'Pre-Registered Vehicle',
      fPrice: null,
      nServiceGroupId: 1,
      scode: '102',
      snameWithotCode: 'Pre-Registered Vehicle',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: false,
      nViewOrder: 1,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 10,
      nMainTypeId: 2,
      nTypeId: 9,
      sTitle: '103-OLD Vehicle Registration',
      sDescription: 'OLD Vehicle Registration',
      fPrice: null,
      nServiceGroupId: 1,
      scode: '103',
      snameWithotCode: 'OLD Vehicle Registration',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 2,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 14,
      nMainTypeId: 1,
      nTypeId: 1,
      sTitle: '402-Learners Permit',
      sDescription: 'Learners Permit',
      fPrice: 200,
      nServiceGroupId: 3,
      scode: '402',
      snameWithotCode: 'Learners Permit',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 2,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 20,
      nMainTypeId: 4,
      nTypeId: 11,
      sTitle: '302-Out of Series Number Plate',
      sDescription: 'Issue out of series number plate',
      fPrice: 200,
      nServiceGroupId: 4,
      scode: '302',
      snameWithotCode: 'Out of Series Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 2,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 17,
      nMainTypeId: 1,
      nTypeId: 7,
      sTitle: '403-Road Worthiness',
      sDescription: 'Road Worthiness',
      fPrice: 200,
      nServiceGroupId: 3,
      scode: '403',
      snameWithotCode: 'Road Worthiness',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 3,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 21,
      nMainTypeId: 4,
      nTypeId: 10,
      sTitle: '303-Dealership Number Plate',
      sDescription: 'Issue Dealer Plate and certificate',
      fPrice: null,
      nServiceGroupId: 4,
      scode: '303',
      snameWithotCode: 'Dealership Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: true,
      bIsVinrequired: null,
      nViewOrder: 3,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 5,
      nMainTypeId: 2,
      nTypeId: 5,
      sTitle: '104-Ownership Transfer',
      sDescription: 'Create New Vehicle and log Ownership for buyer and seller',
      fPrice: 700,
      nServiceGroupId: 1,
      scode: '104',
      snameWithotCode: 'Ownership Transfer',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 4,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 18,
      nMainTypeId: 1,
      nTypeId: 8,
      sTitle: '404-Certificate of insurance',
      sDescription: 'Certificate of insurance',
      fPrice: 200,
      nServiceGroupId: 3,
      scode: '404',
      snameWithotCode: 'Certificate of insurance',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 4,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 22,
      nMainTypeId: 4,
      nTypeId: 9,
      sTitle: '304-Drop & Retake Number Plate',
      sDescription: 'Replace Lost Plate',
      fPrice: 200,
      nServiceGroupId: 4,
      scode: '304',
      snameWithotCode: 'Drop & Retake Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 4,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 7,
      nMainTypeId: 2,
      nTypeId: 3,
      sTitle: '105-Vehicle License Lost',
      sDescription: 'replace Lost Vehicle License',
      fPrice: 200,
      nServiceGroupId: 1,
      scode: '105',
      snameWithotCode: 'Vehicle License Lost',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 5,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 8,
      nMainTypeId: 2,
      nTypeId: 4,
      sTitle: '106-Vehicle License Damaged',
      sDescription: 'replace Damaged Vehicle License',
      fPrice: 200,
      nServiceGroupId: 1,
      scode: '106',
      snameWithotCode: 'Vehicle License Damaged',
      nServiceApplicationPiriority: 100,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 5,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: true,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 23,
      nMainTypeId: 4,
      nTypeId: 3,
      sTitle: '305-Lost Number Plate',
      sDescription: 'Replace Lost Plate',
      fPrice: 200,
      nServiceGroupId: 4,
      scode: '305',
      snameWithotCode: 'Lost Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 5,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 24,
      nMainTypeId: 4,
      nTypeId: 4,
      sTitle: '306-Damaged Number Plate',
      sDescription: 'Replace Lost Plate',
      fPrice: 200,
      nServiceGroupId: 4,
      scode: '306',
      snameWithotCode: 'Damaged Number Plate',
      nServiceApplicationPiriority: 98,
      bIsTinrequired: false,
      bIsVinrequired: null,
      nViewOrder: 6,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
    {
      nServiceId: 27,
      nMainTypeId: 2,
      nTypeId: 7,
      sTitle: '107-Other',
      sDescription: 'Other',
      fPrice: null,
      nServiceGroupId: 1,
      scode: '107',
      snameWithotCode: 'Other',
      nServiceApplicationPiriority: 1,
      bIsTinrequired: false,
      bIsVinrequired: false,
      nViewOrder: 7,
      bIsVisible: true,
      nApplicationGroupId: 2,
      bIsApplicatonMainService: false,
      bCanBeDuplicatedForAnInvoice: false,
      bSeperateApplicationNumber: false,
      nServiceGroup: null,
      nServiceCategory: null,
    },
  ]
  return (
    <>
      <InactivityTimer />
      <ThemeProvider theme={theme}>
        <Formik initialValues={{ attachReceipt: '', cardType: '' }} onSubmit={(values) => console.log(values)}>
          {({ errors, touched, setFieldValue, values, resetForm, dirty }) => (
            <Form>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {/* <Field name="attachReceipt" component={FileUpload} title="Attach Receipt" setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} helpertext={touched.attachReceipt && errors.attachReceipt} errorMessage={errors.attachReceipt ? errors.attachReceipt : undefined} /> */}
                <Field
                  disabled={false}
                  name="cardType"
                  label="Card Type"
                  component={FormikAutocomplete}
                  options={cardTypeOptions}
                  getOptionLabel={(option) => (option.sTitle ? option.sTitle : '')}
                  textFieldProps={{
                    fullWidth: true,
                    variant: 'outlined',
                  }}
                />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {/* <Field name="attachReceipt" component={FileUpload} title="Attach Receipt" setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} helpertext={touched.attachReceipt && errors.attachReceipt} errorMessage={errors.attachReceipt ? errors.attachReceipt : undefined} /> */}

                <StyledButton type="reset">text</StyledButton>
              </Grid>
            </Form>
          )}
        </Formik>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          {/* <Test /> */}
          {/* <FileUpload setFileType={setFileType} setFile={setFile} setFieldValue={setFieldValue} /> */}
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default App