import React from 'react'
import { Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import StaffNavbar from './staffnavbar/staffnavbar'

import STOCK from './stock/stock';
import PROFILE from '../../componenets/profile';
import BIll from './bill/bill';

export default function index() {
    return (
    <>    
  <StaffNavbar/>
  <Container>

  <Router>
    <Switch>
       <Route path="/staffhome/profile"  component={PROFILE}/>
       <Route path="/staffhome/stock"  component={STOCK}/>
       <Route path="/staffhome/bill"  component={BIll}/>
    </Switch>
    </Router>

</Container>
</>
     
    )
}

