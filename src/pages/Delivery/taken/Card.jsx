import React from 'react'
import {  Row, Col, Card,Button } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import axios from 'axios';

import { toast } from "react-toastify";
toast.configure();

export default function Cards({item}) {
 
 
  const deliveredhandlechange =async()=>{
    try {
        axios
        .put(`http://localhost:5000/delivery/deliveredcart`, {
          deliveryid:localStorage.getItem("loginid"),
            _id:item._id
          })
          .then((resp) => {
            if (resp.data.message === "delivered") {
              toast.success(`${resp.data.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
             
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
          });
      } catch (e) {
        console.log(e.data);
      }
 }   

    return (
         <Row className="p-1">
          <Col>       
          <Card
            border={
             
               item.status === "outfordelivery"
                ? "warning"
                :
                item.status==="delivered"
                ?
                "success":"danger"
            }
          key={item._id}
          >  
            <Card.Body>
             product name :{item.productid.productname} ||
             quantity:{item.quantity} ||
             Total amount:{item.totalprice} <br/>
             <strong>
             Shipping address: {item.shippingaddress} ||
             city: {item.city} ||
             pincode: {item.pin} 
             </strong><br/>
             <strong>
             contact <FiPhone/>: {item.customerid.phone}
             </strong>
            </Card.Body>
            <Card.Footer>
            <span className="p-2">{item.status}</span>       
            {
             item.status==="outfordelivery"
             ?  
             <Button variant="success" onClick={()=>deliveredhandlechange()}>Delivered</Button>
             :
             item.status==="delivered"?
             <Card.Text style={{backgroundColor:"orange"}}>   Delivered</Card.Text>:""
            }
            </Card.Footer>
          </Card>
              
          </Col>
      </Row>
    )
}
