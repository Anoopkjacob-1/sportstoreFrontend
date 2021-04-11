import React from "react";
import {Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import AdminNavbar from '../../../componenets/AdminNavbar'



import STOCK from '../stock/stock';
import USERS from '../users/users';
import PROFILE from '../../../componenets/profile';
import CATEGOREYHOME from '../product/categorey/categoreyhome';
import CATEGOREYEDITONE from  '../product/categorey/categoreyeditone';


export default function Homepage() {

  
  return (
    <div>
      <AdminNavbar/>
      <Container>
      <Router>
    <Switch>
       <Route path="/home/profile"  component={PROFILE}/>
       <Route path="/home/stock"  component={STOCK}/>
       <Route path="/home/users"  component={USERS}/>
       <Route path="/home/product/categorey"  component={CATEGOREYHOME}/>
       <Route exact path="/home/categoreyEditOne"  component={CATEGOREYEDITONE}/>
    </Switch>
    </Router>
      </Container>
    </div>
  );
}


