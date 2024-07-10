import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice ({
    name : 'counter',
    initialState : {
        value : 0,
    },

    reducers : {
        increment : (state) => {
            console.log(state)
            state.value += 1
        },
        
        decrement : (state) => {
            console.log(state)
            state.value -= 1
        }  
    }

})


export const {increment ,decrement} = CounterSlice.actions   
export default CounterSlice.reducer