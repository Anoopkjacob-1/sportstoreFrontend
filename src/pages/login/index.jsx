import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


import "./login.css";
import AUTHNAVBAR from '../../componenets/AuthNavbar';

toast.configure()

export default function Login() {
  
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try{
      axios.post(`http://localhost:5000/app/signin`, values).then(resp=>{
     
        if(resp.data.message==='validuser') {
          window.location = "/home";
          localStorage.setItem('myemail', resp.data.email);
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
    //   .then((response) => {
    //       console.log(response.data.message,response.status);
    //       if(response.data.message=='validuser'){
    //         window.location = "/home"
    //       }else{
    //         window.location = "/"
    //       }
    
    // }).catch(error=>{console.log(error)});

  };



  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <AUTHNAVBAR/>
    <Container fluid="sm" className="mainconatiner">
      <Row className="center_row">
        <Col>
          <Form className="login_form" onSubmit={formik.handleSubmit}>
            <h1 className="p-3 ">LOGIN</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email && formik.touched.email
                    ? "form-control is-invalid email"
                    : "email"
                }
              />
              {formik.errors.email ? (
                <div className="invalid-feedback email">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                className={
                  formik.errors.password && formik.touched.password
                    ? "form-control is-invalid Password"
                    : "Password"
                }
              />
              {formik.errors.password ? (
                <div className="invalid-feedback phone">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="submitbtn">
              Submit
            </Button>
            <Form.Text className="text-muted ">
              CREATE NEW <Link to="/registration">ACCOUNT?</Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
