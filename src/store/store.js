import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './AppSlice'
import { onRoadInvoiceSlice } from '../pages/invoice/OnRoadInvoice/OnRoadInvoiceSlice'
import { payInvoiceSlice } from '../pages/invoice/PayInvoice/PayInvoiceSlice'

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [onRoadInvoiceSlice.name]: onRoadInvoiceSlice.reducer,
  [payInvoiceSlice.name]: payInvoiceSlice.reducer,
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
