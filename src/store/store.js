import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './AppSlice'
import { createInvoiceSlice } from '../pages/invoice/CreateInvoice/CreateInvoiceSlice'

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [createInvoiceSlice.name]: createInvoiceSlice.reducer,
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
