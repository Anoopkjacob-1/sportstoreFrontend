import React from 'react'
import {  Row, Col, Card } from "react-bootstrap"

export default function Cards({item}) {

    return (
    <Row className="p-4">
          <Col>
          <Card
           border={
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
                </p>
            }
            </Card.Body>
            <Card.Footer>
            <span className="p-2">{item.status}</span>
            </Card.Footer>
          </Card>       
          </Col>
      </Row>
    )
}
