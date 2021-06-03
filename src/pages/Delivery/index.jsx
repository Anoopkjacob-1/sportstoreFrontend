import React from 'react'
import { Container} from "react-bootstrap";
import {BrowserRouter as Router ,Switch} from 'react-router-dom';

import {Deliveryroute}from '../../Routes/DeliveryRoutes'
import DeliveryNavbar from './navbar/navbar'

import ORDERS from './order/orderlist'
import PROFILE from '../../componenets/profile'
import TAKEN from './taken/taken'
import NOTFOUND from '../../componenets/404'

export default function index() {
    return (
        <div>
        <DeliveryNavbar/>
  <Container>
     <Router>
     <Switch>
        <Deliveryroute path="/delivery/profile"  component={PROFILE}/>
        <Deliveryroute path="/delivery/taken"  component={TAKEN}/>
        <Deliveryroute exact path="/delivery"  component={ORDERS}/>
        <Deliveryroute path="*" component={NOTFOUND} />
        </Switch>
    </Router>
</Container>
        </div>
    )
}

