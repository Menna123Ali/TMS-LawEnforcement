import * as Yup from 'yup'
import { maxFilesSizes } from '../../../../utils/constants/config'

export const INITIAL_VALUES = {
  paymentReference: '',
  attachReceipt: '',
  Paymethod: null,
  KIRSReceiptNumber: '',
  attachVoucher: '',
}
export const validationSchema = Yup.object().shape({
  Paymethod: Yup.object().required('This field is required'),

  attachReceipt: Yup.mixed()
    .when('Paymethod', {
      is: (val) => val?.bIsReceiptRequired,
      then: (schema) => schema.required('A file is required'),
      otherwise: (schema) => schema.optional(),
    })
    .test('fileSize', 'File too large, max allowed size is ' + maxFilesSizes.dl.attach / 1000 + ' KB', (value) => {
      return value && (value?.size > 0 ? value.size : value?.replace(/=/g, '').length * 0.75) < parseInt(maxFilesSizes.dl.attach)
    })
    .nullable(),
  paymentReference: Yup.mixed()
    .when('Paymethod', {
      is: (val) => val?.bIsReceiptNumberRequired,
      then: (schema) => schema.required('A file is required'),
      otherwise: (schema) => schema.optional(),
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
      then: (schema) => schema.required('A file is required'),
      otherwise: (schema) => schema.optional(),
    })
    .nullable(),
})
