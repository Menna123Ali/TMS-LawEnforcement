import { generateSlice } from '../../../store/GenerateSlice'

export const createInvoiceSlice = generateSlice({
  name: 'createinvoice',
  initialState: {
    test: 2,
  },
})
