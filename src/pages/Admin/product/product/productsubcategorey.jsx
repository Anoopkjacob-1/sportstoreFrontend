import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";
import { TiArrowRightThick } from "react-icons/ti";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
toast.configure();

export default function Product({ DataCat, DataBrand }) {
  const history = useHistory();
  const [DataSubCat, setDataSubCat] = useState("");
  const [nextbutton, setnextbutton] = useState(true);

  const nextpagehandleClick = () => {

    const categoreyinput =DataCat.filter(data=>{ return data._id=== formik.values.categoreydrop })
    const subcategoreyinput =DataSubCat.filter(data=>{ return data._id=== formik.values.subcatdrop })
    const brandinput =DataBrand.filter(data=>{return  data._id=== formik.values.branddrop })

    if(formik.values.subcatdrop==="")  {
      toast.error("select subcategorey from the list", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  else{
    history.push({
      pathname: "/home/product/productdetails",
      state: {
        categoreyinput:categoreyinput,
        subcategoreyinput:subcategoreyinput,
        brandinput:brandinput
      },
    });
    setnextbutton(true);
  }  
  };

  const initialValues = {
    categoreydrop: "",
    branddrop: "",
    subcatdrop: "",
  };

  // const FILE_SIZE = 16000 * 102400;
  // const SUPPORTED_FORMATS = [
  //   "image/jpg",
  //   "image/jpeg",
  //   "image/gif",
  //   "image/png"
  // ];

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios
        .post("http://localhost:5000/product/subcategoreyGetOne", values)
        .then((resp) => {
          console.log(resp);
          if (
            resp.data.message === "subcategorey list" &&
            resp.data.data.length !== 0
          ) {
            toast.success(`${resp.data.message}`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
            const response = resp.data;
            setDataSubCat(response.data);
            setnextbutton(false);
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
            setDataSubCat("");
            formik.errors.subcatdrop = "No choice available";
          }
        });
    } catch (e) {
      console.log(e.data);
    }
  };

  const validationSchema = Yup.object({
    categoreydrop: Yup.string().required("please Add categorey"),
    branddrop: Yup.string().required("please Add brand"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Form className="login_form" onSubmit={formik.handleSubmit}>
        <Form.Label>select subcategorey</Form.Label>

        {/* categoreyu */}
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
                  <option key={item.categoreyid} value={item._id}>
                    {item.categoreyname}
                  </option>
                );
              })}
          </Form.Control>
          {formik.errors.categoreydrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.categoreydrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>
        {/* brand */}
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
                  <option key={item.brandid} value={item._id}>
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

        {/* subcat */}

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>subcategorey</Form.Label>
          <Form.Control
            as="select"
            name="subcatdrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subcatdrop}
            className={
              formik.errors.subcatdrop && formik.touched.subcatdrop
                ? "form-control is-invalid subcatdrop"
                : "subcatdrop"
            }
          >
            {DataSubCat.length &&
              DataSubCat.map((item) => {
                return (
                  <option key={item.subcategoreyid} value={item._id}>
                    {item.subcategoreyname}
                  </option>
                );
              })}
          </Form.Control>
          {formik.errors.subcatdrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.subcatdrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>
        {nextbutton ? (
          <Button variant="success" type="submit" className="submitbtn m-2">
            search
          </Button>
        ) : (
          <Button
            variant="info"
            type="button"
            className="submitbtn m-2"
            onClick={() =>
              nextpagehandleClick(
                formik.values.categoreydrop,
                formik.values.branddrop,
                formik.values.subcatdrop,
                DataCat,
                DataBrand,
                DataSubCat
              )
            }
          >
            next <TiArrowRightThick />
          </Button>
        )}
      </Form>
    </div>
  );
}


