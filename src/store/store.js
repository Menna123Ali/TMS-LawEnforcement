import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './AppSlice'

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
