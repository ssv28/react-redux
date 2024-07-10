import { createSlice } from "@reduxjs/toolkit";

export const ApiCrudReducer = createSlice({

    name: 'apicrud',
    initialState: {

        data: [],
        intialval: {
            name: '',
            gstno: '',
            baseamount: '',
            gstpercentage: '',
            totalamount: '',
            invoiceno: '',
        },

        editdata: null,
        // copyData: [],

    },

    reducers: {

        

        addData: (state, action) => {


        },


        deleteData: (state, action) => {



        },

        updateData: (state, action) => {


        },

        searchData: (state, action) => {

        }
    }

})

export const { addData, deleteData, updateData, searchData } = ApiCrudReducer.actions
export default ApiCrudReducer.reducer
