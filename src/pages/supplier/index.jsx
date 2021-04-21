import React from 'react'
import { Container} from "react-bootstrap";
import {BrowserRouter as Router ,Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import SupplierNavbar from './navbar/SupplierNavbar'
import { SupplierRoute } from "../../Routes/SupplierRoutes";


import PROFILE from '../../componenets/profile';
import CHATS from './chats/Chats' 
import REQUEST from './Request/Request' 

export default function index() {
    return (
       
  <>    
  <SupplierNavbar/>
  <Container>
  <Router>
    <Switch>
       <SupplierRoute path="/supplierhome/profile"  component={PROFILE}/>
       <SupplierRoute path="/supplierhome/Request"  component={REQUEST}/>
       <SupplierRoute path="/supplierhome/chats"  component={CHATS}/>
    </Switch>
    </Router>

</Container>
</>
    )
}


