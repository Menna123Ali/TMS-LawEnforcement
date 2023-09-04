import { createSlice } from '@reduxjs/toolkit'
import dotPropImmutable from 'dot-prop-immutable'

export const generateSlice = ({ name, initialState, reducers }) => {
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
        let newState = state

        action.payload.forEach((element) => {
          newState = dotPropImmutable.set(newState, element.prop, element.value)
        })

        return newState
      },
      merge: (state, action) => {
        let newState = state

        action.payload.forEach((element) => {
          newState = dotPropImmutable.merge(newState, element.prop, element.value)
        })

        return newState
      },
      delete: (state, action) => {
        let newState = state

        action.payload.forEach((element) => {
          newState = dotPropImmutable.delete(newState, element.prop)
        })

        return newState
      },

      // Then pass through any other reducers specific to this slice only.
      ...reducers,
    },
  })
}
