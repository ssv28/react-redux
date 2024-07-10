import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import NewReducer from "./NewReducer";
import InputCountReducer from "./InputCountReducer";
import FieldCrudReducer from "./FieldCrudReducer";
import ApiCrudReducer from "./ApiCrudReducer";


//store krava ma aave aaya 

export default configureStore({
    reducer: {
        counter: CounterReducer,
        newaction: NewReducer,
        inputcounter : InputCountReducer,
        field : FieldCrudReducer,
        apicrud : ApiCrudReducer
    }
})
