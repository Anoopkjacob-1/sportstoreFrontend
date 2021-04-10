import React,{useState,useEffect} from "react";
import EditButton from '../../pages/Admin/product/EditButton' ;
import Table from '../Table/Table'
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
toast.configure()

export default function AsyncDropdown() {
  const [DATA, setData] = useState("data");
  const [TABLE, setTable] = useState(false);

  useEffect(() => {
    try {
      async function userdatfetch() {
        await axios({
          method: "Get",
          url: "http://localhost:5000/product/categoreyGet",
        }).then((resp) => {
          const response = resp.data;
          setData(response);
        });
      }
      userdatfetch();
    } catch (e) {
      console.error(e);
    }
  }, []);


  
const initialValues = {
  categoreyname: "",
};

const onSubmit = async (values , {setSubmitting,resetForm}) => {

  console.log(values)
  try{

    axios.post(`http://localhost:5000/product/categoreyAdd`, values).then(resp=>{
   
      if(resp.request.status===200) {
        toast.success(`${resp.data.message}`,{
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined});
          resetForm({});
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



const validationSchema = Yup.object({
  categoreyname: Yup.string().required("please Add categorey").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
});

const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema,
});



  const COLUMNS=[
    {
        Header:'Categorey',
        accessor:'categoreyname'
    },
    {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <EditButton Rows={row}/>        
        )
      }
  ]



  return (
    <div>
      <div className="p-4 m-3">
            {
            TABLE ?
          <div>
          <Button variant="info" type="button" className="submitbtn m-2" onClick={()=>setTable(!TABLE)}>
         <IoArrowBackCircle />    
         </Button>  
            <Table  COLUMNS={COLUMNS} DATA={DATA} />
          </div>
        :   
        <Form className="login_form" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ADD CATEGOREY</Form.Label>
          <Form.Control
            type="text"
            placeholder="ADD CATEGOREY"
            name="categoreyname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoreyname}
            className={
              formik.errors.categoreyname && formik.touched.categoreyname
                ? "form-control is-invalid categorey"
                : "categorey"
            }
          />
          {formik.errors.categoreyname ? (
            <div className="invalid-feedback categorey">
              {formik.errors.categoreyname}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Button variant="success" type="submit" className="submitbtn m-2">
          Submit
        </Button>
        <Button variant="info" type="button" className="submitbtn m-2" onClick={()=>setTable(!TABLE)}>
          EDIT PAGE
        </Button>  
      </Form>
     } 
      </div>
   
    </div>

  );
}

//  table





