import React from "react";
import {Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import AdminNavbar from '../../../componenets/AdminNavbar'



import STOCK from '../stock/stock';
import USERS from '../users/users';
import PROFILE from '../../../componenets/profile';
import CATEGOREYHOME from '../product/categorey/categoreyhome';
import SUBCATEGOREY from '../product/subcategorey/subcategoreyhome';
import BRANDHOME from '../product/brand/brandhome';
import PRODUCTHOME from '../product/product/producthoem';
import PRODUCTHOMEDETAILS from '../product/product/productdetails';
import CATEGOREYEDITONE from  '../product/categorey/categoreyeditone';
import BRANDEDITONE from  '../product/brand/brandeditone';
import SUBCATEDITONE from  '../product/subcategorey/subcategoreyeditone';


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
       <Route path="/home/product/subcategorey"  component={SUBCATEGOREY}/>
       <Route path="/home/product/product"  component={PRODUCTHOME}/>
       <Route path="/home/product/productdetails"  component={PRODUCTHOMEDETAILS}/>
       <Route exact path="/home/categoreyEditOne"  component={CATEGOREYEDITONE}/>
       <Route exact path="/home/brandEditOne"  component={BRANDEDITONE}/>
       <Route exact path="/home/SubcatEditOne"  component={SUBCATEDITONE}/>
    </Switch>
    </Router>
      </Container>


    </div>
  );
}


