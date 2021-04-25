import React from 'react'
import { Container, Row, Col,Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import notfound from '../Assets/images/404.jpg'

export default function Notfound() {
    return (
     <Container>
         <Row>
             <Col>
              <Image src={notfound} alt="404 NOT FOUND"/>
             </Col>
         </Row>
     </Container>
    )
}
