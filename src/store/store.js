import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './AppSlice'
import { onRoadInvoiceSlice } from '../pages/invoice/OnRoadInvoice/OnRoadInvoiceSlice'

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [onRoadInvoiceSlice.name]: onRoadInvoiceSlice.reducer,
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
