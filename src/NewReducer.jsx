import { createSlice } from "@reduxjs/toolkit";

export const incSlice =  createSlice({
    name : 'newaction',
    initialState : {
       value : 5 
    },
    reducers : {
        inceByfive: (state)  =>{
            state.value += 5
        }
    }
})

export const {inceByfive} = incSlice.actions
export default incSlice.reducer
