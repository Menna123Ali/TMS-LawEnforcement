import * as Yup from 'yup'
export const initialState = {
  serviceType: null,
  category: null,
  subType: null,
  plateNumber: '',
  vin: '',
}

export const validateSchema = Yup.object().shape({
  serviceType: Yup.object().required('This field is required'),
  // .test('serviceReapet', 'this service type has been choosen before', (val) => selectedServices.filter((ele) => ele.serviceType.nServiceId == val?.nServiceId).length == 0 || val?.bCabBeDuplicatedForAnInvoice)
  category: Yup.object().required('This field is required'),
  subType: Yup.object().required('This field is required'),
  plateNumber: Yup.mixed()
    .when('serviceType', {
      is: (val) => val?.bIsPlateNumberrequired,
      then: (schema) => schema.required('This field is required'),
      // .matches(/^[^-\s][a-zA-Z0-9_\s-]+$/, 'This field cannot accept special character'),
    })
    .nullable(),
  vin: Yup.mixed()
    .when('serviceType', {
      is: (val) => val?.bIsVinrequired,
      then: (schema) => schema.required('This field is required'),
    })
    .nullable(),
})
export const columns = [
  { id: 'sInvoiceNumber', label: 'Invoice Number', align: 'left' },
  { id: 'dtCreationDate', label: 'Invoice Date', align: 'left' },
  { id: 'invoiceTotalPrice', label: 'Total', align: 'center' },
  { id: 'actions', label: '', align: 'center' },
]
