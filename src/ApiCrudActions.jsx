import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData, searchData } from "./FieldCrudReducer";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const ApiCrudActions = () => {
    const data = useSelector((state) => state.field.data);
    const intialval = useSelector((state) => state.field.intialval)
    const dispatch = useDispatch(); //function call krava
    useEffect(() => {                  //data lavva mate
        allDataApi()
    }, [])

    let allDataApi = () => {
        axios.get("https://service.apikeeda.com/gst-invoice", {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTM5MzcyODQzODctOTY3MzU4Mjc2IiwiaWF0IjoxNzEzOTM3Mjg0LCJleHAiOjE3MTQxMTAwODR9.xRSuQ2AaPFHHmlML63N2VM6P_blmLZ_rdVk5QEZkxb8"
          }
        })
    
          .then((res) => {
            console.log(res);
            // setData(res.data.data)
    
          })
    
          .catch((err) => {
            console.log(err);
          })
      }
    

    return (

        <div style={{ marginLeft: "50px" }}>
            <h1>Redux APICRUD</h1>
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

                    gstno: <Field
                        type="number"
                        name="gstno"
                        style={{ backgroundColor: "lightblue" }}
                    /><br />

                    baseamount : <Field
                        type="number"
                        name="baseamount"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br />

                    gstpercentage : <Field
                        type="number"
                        name="gstpercentage"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br />

                    totalamount : <Field
                        type="number"
                        name="totalamount"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br />

                    invoiceno : <Field
                        type="number"
                        name="invoiceno"
                        style={{ backgroundColor: "lightblue" }}
                    /> <br /><br />

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
                    <th>Gst NO.</th>
                    <th>Base amount</th>
                    <th>GST percentage</th>
                    <th>Total amount</th>
                    <th>Invoice no</th>
                    <th>Action</th>
                </tr>

                {
                    data.map((item, i) => (

                        <tr key={i}>

                            <td>{item.name}</td>
                            <td>{item.gstno}</td>
                            <td>{item.baseamount}</td>
                            <td>{item.gstpercentage}</td>
                            <td>{item.totalamount}</td>
                            <td>{item.invoiceno}</td>
                            <td>
                                &nbsp;
                                <button type="button" onClick={() => dispatch(updateData(i))} style={{ backgroundColor: "blue", color: "#fff" }}>
                                    EDIT
                                </button>

                                <button type="button" onClick={() => dispatch(deleteData(i))} style={{ backgroundColor: "red", color: "#fff" }}>
                                    DELETE
                                </button> &nbsp;
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>

    );
};

export default ApiCrudActions;
