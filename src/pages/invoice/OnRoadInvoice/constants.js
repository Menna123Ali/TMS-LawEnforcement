import * as Yup from 'yup'
import Delete from '@mui/icons-material/Delete'
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
  plateNumber: Yup.string()
    .when('serviceType', {
      is: (val) => val?.bIsPlateNumberrequired,
      then: (schema) => schema.required('This field is required'),
    })
    .matches(/^[^-\s][a-zA-Z0-9_\s-]+$/, 'This field cannot accept special character')
    .nullable(),
  vin: Yup.mixed()
    .when('serviceType', {
      is: (val) => val?.bIsVinrequired,
      then: (schema) => schema.required('This field is required'),
    })
    .nullable(),
})
export const columns = (actions) => [
  { id: 'snameWithotCode', label: 'Service', align: 'center', renderColumn: 'service.snameWithotCode' },
  { id: 'VehicleType', label: 'Vehicle Type', align: 'center', renderColumn: 'subType.sSubTypeNameEn' },
  { id: 'RegisterationType', label: 'Registeration Type', align: 'center', renderColumn: 'subType.sSubTypeCategoryNameEn' },
  { id: 'price', label: 'Fees', align: 'center', renderColumn: 'price' },
  {
    id: 'Delete',
    label: 'Delete',
    align: 'center',
    renderColumn: (row) => (
      <div onClick={() => actions.deleteSelectedServices(row.service.nServiceId)}>
        <Delete />
      </div>
    ),
  },
]
