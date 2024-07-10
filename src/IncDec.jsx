import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./InputCountReducer";
import { Field, Form, Formik } from "formik";


const IncDec = () => {
    const data = useSelector((state) => state.inputcounter.value);       
    const dispatch = useDispatch(); //function call krava
    // const [value, setValue] = useState(0);

    return (
        // <div>
        //   <h1>{data}</h1>
        //   <input
        //     type="number"
        //     value={value}
        //     onChange={(e) => setValue(Number(e.target.value))}
        //   />
        //   <button onClick={()=>dispatch(increment(value))}>Increment</button>
        //   <button onClick={()=>dispatch(decrement(value))}>Decrement</button>
        // </div>

        <div>
            <h1>{data}</h1>
            <Formik
                initialValues={{ value: '' }}
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                }}
            >
                {({ values, handleChange }) => (
                    <Form >
                        <Field
                            type="number"
                            name="value"
                            value={values.value}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={() => dispatch(increment(Number(values.value)))}>
                            Increment
                        </button>
                        <button type="button" onClick={() => dispatch(decrement(Number(values.value)))}>
                            Decrement
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    );
};

export default IncDec;