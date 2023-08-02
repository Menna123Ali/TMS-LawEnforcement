import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CountReducer from './testSlice'
import TestCounter from './test2Slice'

const reducer = combineReducers({
  count: CountReducer,
  test: TestCounter,
})

export default configureStore({
  reducer,
})
