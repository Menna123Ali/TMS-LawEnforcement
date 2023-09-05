import * as Yup from 'yup'
import ButtonColumn from '../../../components/common/ButtonColumn/ButtonColumn.styles'

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
    list.reduce((acc, field) => {
      return {
        ...acc,
        [field]: this.fields[field].when(without(list, field), {
          is: (...values) => !values.some((item) => item),
          then: () => this.fields[field].required(message),
        }),
      }
    }, {}),
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

export const columns = (actions) => [
  { id: 'sInvoiceNumber', label: 'Invoice Number', align: 'left', renderColumn: 'sInvoiceNumber' },
  { id: 'dtCreationDate', label: 'Invoice Date', align: 'left', renderColumn: 'dtCreationDate' },
  { id: 'invoiceTotalPrice', label: 'Total', align: 'center', renderColumn: 'invoiceTotalPrice' },
  {
    id: 'pay',
    label: 'Pay',
    align: 'center',
    renderColumn: (row) => (
      <div onClick={() => actions.payInvoice(row)}>
        <ButtonColumn>Pay</ButtonColumn>
      </div>
    ),
  },
]
