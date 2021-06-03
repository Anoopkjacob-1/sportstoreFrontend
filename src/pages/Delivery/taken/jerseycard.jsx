import React from 'react'
import {  Row, Col, Card, Button } from "react-bootstrap"
import { FiPhone } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();


export default function Cards({item}) {


    const deliveredhandlechange =async()=>{
        try {
            axios
              .put(`http://localhost:5000/delivery/deliveredjersey`, {
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
    <Row className="p-4">
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
          >
            <Card.Body>
                orderid:{item._id}<br/>
                discrption:{item.discrption}
                <br />
                size-no. of jersey:{item.sizeandnoof.lenght!==0? item.sizeandnoof.map(i=>{return(` ${i} || `)}):""}
                <br />  
                Amount: {item.Amount}  <br />  
            {
              item.payement==="paid" && 
                <p>
                  <strong>
                  shipping address: {` ${item.shippingaddress}, city:${item.city}, pin:${item.pin}`} 
               
                  </strong>
                  <br/>
                  <strong>
                 contact <FiPhone/>: {item.userid.phone}
             </strong>
                </p>
            }
            </Card.Body>
            <Card.Footer>
            <span className="p-2">{item.status}</span>
              {
                 item.status==="outfordelivery"?
                 <Button variant="success" onClick={()=>deliveredhandlechange()}>Delivered</Button>
                 :item.status==="delivered"?
                 <Card.Text style={{backgroundColor:"orange"}}>  Delivered</Card.Text>:""
              }
            </Card.Footer>
          </Card>       
          </Col>
      </Row>
    )
}
