import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData, searchData } from "./FieldCrudReducer";
import { Field, Form, Formik } from "formik";

const Crudbtn = () => {
    const data = useSelector((state) => state.field.data);
    const intialval = useSelector((state) => state.field.intialval)
    // console.log(data)
    const dispatch = useDispatch(); //function call krava


    // const [search, setSearch] = useState("");

    // const searchData = (e) => {
    //     console.log("===>>>", e)
    //     // setSearch(e)
    //     setSearch(e.target.value);
    // };

    // const filteredData = data.filter((item) =>
    //     item.name.includes(search) ||
    //     item.email.includes(search) ||
    //     item.password.includes(search)
    // );

    return (

        <div style={{ marginLeft: "50px" }}>
            <h1>Redux CRUD</h1>
            <Formik
                enableReinitialize
                initialValues={intialval}

                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    dispatch(addData(values))
                    resetForm()
                }}
            >

                <Form>
                    Name : <Field
                        type="text"
                        name="name"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br />

                    Email : <Field
                        type="email"
                        name="email"
                        style={{ backgroundColor: "lightblue" }}
                    /><br />

                    Password : <Field
                        type="password"
                        name="password"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br /> <br />

                    <button type="submit" style={{ backgroundColor: "green", color: "#fff" }}>
                        SUBMIT
                    </button>

                    <br />

                    <Field
                        name="search"
                        type="text"
                        placeholder="Search here ..."
                        // value={search}
                        onChange={(e) => dispatch(searchData(e.target.value))}
                        style={{ marginTop: "20px", padding: "5px", width: "300px", background: "pink" }}
                    />

                </Form>
            </Formik>

            <br />

            <table border={1} style={{ backgroundColor: "#fafac9" }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>

                {
                    data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button type="button" onClick={() => dispatch(deleteData(i))} style={{ backgroundColor: "red", color: "#fff" }}>
                                    DELETE
                                </button> &nbsp;

                                <button type="button" onClick={() => dispatch(updateData(i))} style={{ backgroundColor: "blue", color: "#fff" }}>
                                    EDIT
                                </button>

                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>

    );
};

export default Crudbtn;
