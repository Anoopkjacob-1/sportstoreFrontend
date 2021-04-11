import React from "react";
import {Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import AdminNavbar from '../../../componenets/AdminNavbar'



import STOCK from '../stock/stock';
import USERS from '../users/users';
import PROFILE from '../../../componenets/profile';
import CATEGOREYHOME from '../product/categorey/categoreyhome';
import BRANDHOME from '../product/brand/brandhome';
import CATEGOREYEDITONE from  '../product/categorey/categoreyeditone';
import BRANDEDITONE from  '../product/brand/brandeditone';


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
       <Route path="/home/product/brand"  component={BRANDHOME}/>
       <Route exact path="/home/categoreyEditOne"  component={CATEGOREYEDITONE}/>
       <Route exact path="/home/brandEditOne"  component={BRANDEDITONE}/>
    </Switch>
    </Router>
      </Container>
    </div>
  );
}


