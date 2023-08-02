import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
}
// export const reduxReducer = (state, action) => {
//   let newState = state
//   switch (action.type) {
//     case UPDATE_PROP:
//       newState = dotProp.set(newState, action.prop, action.value)

//     case DELETE_PROP:
//       newState = dotProp.delete(newState, action.prop)

//     case MERGE_PROP: {
//       newState = dotProp.merge(newState, action.prop, action.value)
//     }
//   }

//   return newState
// }
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(action)
      //   state['value'] += 1

      state[action.payload.prop] = action.payload.value
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { update, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
