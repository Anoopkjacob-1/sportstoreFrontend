import React from 'react'
import { Container} from "react-bootstrap";
import {BrowserRouter as Router ,Switch} from 'react-router-dom';

import {Deliveryroute}from '../../Routes/DeliveryRoutes'
import DeliveryNavbar from './navbar/navbar'

import ORDERS from './orderlist'
import PROFILE from '../../componenets/profile'
import NOTFOUND from '../../componenets/404'

export default function index() {
    return (
        <div>
        <DeliveryNavbar/>
  <Container>
     <Router>
     <Switch>
        <Deliveryroute path="/delivery/profile"  component={PROFILE}/>
        <Deliveryroute exact path="/delivery"  component={ORDERS}/>
        <Deliveryroute path="*" component={NOTFOUND} />
        </Switch>
    </Router>
</Container>
        </div>
    )
}

