import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
toast.configure();

export default function Subcategorey({ DataBrand, DataCat }) {
  // {setTable,TABLE}

  // const initialValues = {
  //   subcatname: "",
  //   categorey: "",
  //   brand: ""
  // };

  const initialValues = {
    subcatname: "",
    categoreydrop:"",
    branddrop:"",
  };

  const onSubmit = async (values, {setSubmitting,resetForm}) => {
    console.log(values);
      try{

        axios.post(`http://localhost:5000/product/subcategoreyAdd`, values).then(resp=>{

          console.log(resp)

          if(resp.data.message==="subcategorey added") {
            toast.success(`${resp.data.message}`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined});
              resetForm({})
              setTimeout(() => {
                window.location.reload(false)
              }, 3000);
          }else{
            toast.error(`${resp.data.message}`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined})
          }
        });

      }catch(e){

        console.log(e.data)
      }
  };

  // const validationSchema = Yup.object({
  //   subcatname: Yup.string()
  //     .required("please Add subcatname")
  //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
  //   // categorey: Yup.array().min(1, "Select one").required("please select one"),
  //   // brand: Yup.array().min(1, "Select one").required("please select one"),
  // });

  const validationSchema = Yup.object({
    subcatname: Yup.string().required("please Add sub-categorey").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    categoreydrop: Yup.string().required("please Add categorey"),
    branddrop: Yup.string().required("please Add brand")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Form className="login_form" onSubmit={formik.handleSubmit}>

      <Form.Group controlId="formBasicEmail">
          <Form.Label>ADD SUBCATEGOREY</Form.Label>
          <Form.Control
            type="text"
            placeholder="ADD subcatname"
            name="subcatname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subcatname}
            className={
              formik.errors.subcatname && formik.touched.subcatname
                ? "form-control is-invalid subcatname"
                : "subcatname"
            }
          />
          {formik.errors.subcatname ? (
            <div className="invalid-feedback subcatname">
              {formik.errors.subcatname}
            </div>
          ) : (
            ""
          )}

        </Form.Group>
         <Form.Group as={Col} controlId="formGridState">
          <Form.Label>categorey</Form.Label>
          <Form.Control
            as="select"
            name="categoreydrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoreydrop}
            className={
              formik.errors.categoreydrop && formik.touched.categoreydrop
                ? "form-control is-invalid categorey"
                : "categorey"
            }
          >
            {DataCat.length &&
              DataCat.map((item) => {
                return (
                  <option key={item.categoreyid} value={item.categoreyid}>
                    {item.categoreyname}
                  </option>
                );
              })
              }
          </Form.Control>
          {formik.errors.categoreydrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.categoreydrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            as="select"
            name="branddrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.branddrop}
            className={
              formik.errors.branddrop && formik.touched.branddrop
                ? "form-control is-invalid brand"
                : "brand"
            }
          >
            {DataBrand.length &&
              DataBrand.map((item) => {
                return (
                  <option key={item.brandid} value={item.brandid}>
                    {item.brandname}
                  </option>
                );
              })}
          </Form.Control>
          {formik.errors.branddrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.branddrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group> 


       
        <Button variant="success" type="submit" className="submitbtn m-2">
          Submit
        </Button>
        <Button variant="info" type="button" className="submitbtn m-2" >
                 EDIT PAGE
         </Button> 
    
        
      </Form>
    </div>
  );
}

// topics: Yup.array()
// .min(3, 'Pick at least 3 tags')
// .of(
//   Yup.object().shape({
//     label: Yup.string().required(),
//     value: Yup.string().required(),
//   })

// topics: [],

// / <Select
// id="color"
// options={options}
// multi={true}
// onChange={this.handleChange}
// onBlur={this.handleBlur}
// value={this.props.value}
// // />
// {!!this.props.error &&
// this.props.touched && (
//   <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
// )} */

// /* <Form.Group as={Col} controlId="formGridState">
//       <Form.Label>State</Form.Label>
//       <Form.Control as="select" defaultValue="Choose...">
//         <option>Choose...</option>
//         <option>...</option>
//       </Form.Control>
//     </Form.Group> */
