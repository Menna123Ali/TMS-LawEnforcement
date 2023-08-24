import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice, count } from './AppSlice'

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [count.name]: count.reducer,
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
