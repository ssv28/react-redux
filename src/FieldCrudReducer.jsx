import { createSlice } from "@reduxjs/toolkit";

export const FieldCrudReducer = createSlice({

    name: 'field',
    initialState: {
        data: [],

        intialval: {
            name: '',
            email: '',
            password: '',
        },

        editdata: null,
        copyData: [],
       

    },


    

    reducers: {
        
        addData: (state, action) => {
            if (state.editdata != null) {
                // state.copyData[state.editdata] = {...action.payload}
                // console.log("state.copyData",state.editdata)
                state.copyData[state.editdata] = action.payload
                // state.data.splice(state.editdata,1)
                state.data = state.copyData
                state.editdata = null
                state.intialval = {
                    name: "",
                    email: "",
                    password: "",
                }
                // state.data.splice(state.editdata , 1 , action.payload)
            }

            else {
                console.log("Add==>>", action.payload);
                state.copyData.push(action.payload);
                state.data = state.copyData
            }

        },


        deleteData: (state, action) => {
            // console.log(i)
            // state.data.splice(action.payload)
            console.log("action", action);
            state.copyData.splice(action.payload, 1);
            state.data = state.copyData

        },

        updateData: (state, action) => {
            console.log("Update===>>", action)
            state.editdata = action.payload;
            state.intialval = state.data[action.payload]
            //console.log("editdata", state.editdata);

        },

        searchData: (state, action) => {
            console.log("==>>", action.payload)

            state.data = state.copyData.filter((item) =>
                item.name.includes(action.payload) ||
                item.email.includes(action.payload) ||
                item.password.includes(action.payload)
            )
            // state.data = state.filteredData


            // const filteredData = data.filter((item) =>
            //     item.name.includes(search) ||
            //     item.email.includes(search) ||
            //     item.password.includes(search)
            // );

        }
    }

})

export const { addData, deleteData, updateData, searchData } = FieldCrudReducer.actions
export default FieldCrudReducer.reducer
