import React,{useEffect,useState} from 'react';
import Table from '../../../componenets/Table/Table'
import {Container,Row,Col,Form} from "react-bootstrap";
import axios from "axios";



import  { COLUMNS } from './Columns'

export default function Users() {

const [DATA,setData] = useState([])
 const [user, setuser] = useState("customer")


 const valuedropdown=(e)=>{
  if (e.target.value === "supplier") {
    setuser("supplier");   
  } 
  if (e.target.value === "staff"){
    setuser("staff");
  }
  if (e.target.value === "customer"){
    setuser("customer");
  }
 }


  
useEffect( () => {
  try {
async function userdatfetch () {
  await axios.get( `http://localhost:5000/app/userdata`,  
     { params: {
       usertype:user
      }
     }
    ).then(resp=>{   
      const response=resp.data;
      setData(response)
    });
 }
 userdatfetch();
  } catch (e) {
      console.error(e);
  }
}, [user]);

    return (
        <div>
      <Container>
      <Row className="mt-3">
      <Col className="mt-2">
      <Form className="register_form p-0 m-2">
        <Form.Row className="usertyperow">
        <Form.Label>Type Of User</Form.Label>
        <Form.Control
          as="select"
          name="usetype"
          onClick={valuedropdown}
        >
          <option value="customer">CUSTOMER</option>
          <option value="supplier">SUPPLIER</option>
          <option value="staff">STAFF</option>
        </Form.Control>
        </Form.Row>
        </Form>
        <div >
      {DATA.length!==0 ?
               <div>
                 <h1 className="p-2 mb-2">{user} list</h1>
                  <Table  COLUMNS={COLUMNS} DATA={DATA} />
               </div>
               :<h1>Loading....</h1> 
          }
        </div>
      </Col>
      </Row>
     
      </Container>
      
        </div>
    )
}
