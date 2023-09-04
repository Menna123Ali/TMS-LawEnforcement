import { generateSlice } from '../../../store/GenerateSlice'

export const onRoadInvoiceSlice = generateSlice({
  name: 'onRoadInvoice',
  initialState: { feesData: null, selectedServices: [], invoiceInfo: null },
})
