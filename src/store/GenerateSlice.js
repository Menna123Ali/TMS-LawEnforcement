import { createSlice } from '@reduxjs/toolkit'

export const generateSlice = ({ name, initialState, reducers, extraReducers }) => {
  initialState = {
    ...initialState,
  }
  return createSlice({
    name,
    initialState,
    reducers: {
      // Our reusable reducers will go here...
      reset: () => ({ ...initialState }),
      update: (state, action) => {
        action.payload.forEach((element) => {
          if (typeof element.value === 'function') {
            state[element.prop] = element.value(state[element.prop])
          } else {
            state[element.prop] = element.value
          }
        })
      },

      // Then pass through any other reducers specific to this slice only.
      ...reducers,
    },
    extraReducers: {
      // extraReducers are global reducers that apply to all slices.// We'll come back to these later.
      ...extraReducers,
    },
  })
}
