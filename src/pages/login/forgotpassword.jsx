import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdEmail } from "react-icons/md"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import AUTHNAVBAR from "../../componenets/AuthNavbar";

export default function Forgotpassword() {
    const history = useHistory(); 



  const initialValues = {
    email: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    try {
      axios.post(`http://localhost:5000/app/forgotpassword`, values).then((resp) => {
        console.log(resp);
        if (resp.data.message === "Token sended") {
          toast.success(`${resp.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          resetForm({});
          if(resp.data.token==="tokensended") history.push({pathname:"/forgotpassword/newpassword"});
        } else {
          toast.error(`${resp.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
        setSubmitting(false);
      });
    } catch (e) {
      console.log(e.data);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <AUTHNAVBAR />
      <Container>
      <Row className="d-flex justify-content-center" >
        <Col style={{maxWidth:"50%", height:"100vh"}} >
            <Form className="register_form p-5 " onSubmit={formik.handleSubmit}>
              <h1 className="p-3 ">FORGOT PASSWORD</h1>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Registered Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Registered Email"
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
              </Form.Row>
              <Button variant="warning" type="submit">
                TOKEN SEND TO MAIL <MdEmail/>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
