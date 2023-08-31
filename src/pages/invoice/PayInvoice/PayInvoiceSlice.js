import { generateSlice } from '../../../store/GenerateSlice'

export const payInvoiceSlice = generateSlice({
  name: 'payInvoice',
  initialState: { feesData: null },
})
