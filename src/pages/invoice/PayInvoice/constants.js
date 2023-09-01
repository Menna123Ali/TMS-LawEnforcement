import * as Yup from 'yup'

export const initialState = {
  invoiceNumber: '',
  customerName: '',
  customerPhone: '',
}

const without = (array, ...values) => {
  return array.filter((item) => !values.includes(item))
}

Yup.addMethod(Yup.object, 'atLeastOneRequired', function atLeastOneRequired(list, message) {
  return this.shape(
    list.reduce(
      (acc, field) => ({
        ...acc,
        [field]: this.fields[field].when(without(list, field), {
          is: (...values) => !values.some((item) => item),
          then: this.fields[field].required(message),
        }),
      }),
      {}
    ),
    list.reduce((acc, item, idx, all) => [...acc, ...all.slice(idx + 1).map((i) => [item, i])], [])
  )
})

export const validateSchema = Yup.object()
  .shape({
    invoiceNumber: Yup.string(),
    customerName: Yup.string(),
    customerPhone: Yup.string(),
  })
  .atLeastOneRequired(['invoiceNumber', 'customerName', 'customerPhone'], 'At least one field is required')

export const columns = [
  { id: 'sInvoiceNumber', label: 'Invoice Number', align: 'left' },
  { id: 'dtCreationDate', label: 'Invoice Date', align: 'left' },
  { id: 'invoiceTotalPrice', label: 'Total', align: 'center' },
  { id: 'actions', label: '', align: 'center' },
]
