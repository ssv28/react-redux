import { createSlice } from "@reduxjs/toolkit";

export const InputCounterSlice = createSlice({
    name: 'inputcounter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.value += action.payload

        },
        
        decrement: (state, action) => {
            console.log(action)
            state.value -= action.payload

        }
    }

})

export const { increment, decrement } = InputCounterSlice.actions
export default InputCounterSlice.reducer
