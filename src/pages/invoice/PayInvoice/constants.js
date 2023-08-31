import * as Yup from 'yup'
export const initialState = {
  invoiceNumber: '',
  customerName: '',
  customerPhone: '',
}

Yup.addMethod(Yup.object, 'atLeastOneRequired', function atLeastOneRequired(list, message) {
  return this.test('atLeastOneRequired', message, function (value) {
    return list.some(field => Boolean(value[field]));
  });
})

export const validateSchema = Yup.object()
.shape({
  invoiceNumber: Yup.string(),
  customerName: Yup.string(),
  customerPhone: Yup.string(),
})
.atLeastOneRequired(['invoiceNumber', 'customerName', 'customerPhone'], 'At least One required')

export const columns = [
  { id: 'sInvoiceNumber', label: 'Invoice Number', align: 'left' },
  { id: 'dtCreationDate', label: 'Invoice Date', align: 'left' },
  { id: 'invoiceTotalPrice', label: 'Total', align: 'center' },
  { id: 'actions', label: '', align: 'center' },
]
