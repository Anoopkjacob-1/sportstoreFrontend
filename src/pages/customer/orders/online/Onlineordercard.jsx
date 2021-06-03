import React from 'react'
import {  Row, Col, Card } from "react-bootstrap";
import Rate from './Rating'
import { FiPhone } from "react-icons/fi";

export default function Cards({item}) {

    return (
         <Row className="p-1">
          <Col>       
          <Card
            border={
                item.status === "cashpayed"
                ? "warning"
                : item.status === "delivered"
                ? "success"
                :
                item.status==="outfordelivery"
                ?
                "info":"danger"
            }
          key={item._id}
          >  
            <Card.Body>
             product name :{item.productid.productname} ||
             quantity:{item.quantity} ||
             Total amount:{item.totalprice} ||
             Shipping address: {item.shippingaddress} ||
             city: {item.city} ||
             pincode: {item.pin}
            </Card.Body>
            <Card.Footer>
            <span className="p-2">{item.status}</span>       
            {item.status==="outfordelivery"
             ?  
             <Card.Text>

               contact <FiPhone/> :{item.deliverycontact}
             </Card.Text> 
             :
             item.status==="delivered" && item.rated!=="rated"?
             <div className="inline">
                 <Rate item={item}/>
             </div>:""
            }
            </Card.Footer>
          </Card>
              
          </Col>
      </Row>
    )
}
