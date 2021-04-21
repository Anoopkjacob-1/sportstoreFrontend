import React from "react";
import {Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import AdminNavbar from '../../../componenets/AdminNavbar'
import {AdminRoute} from  '../../../Routes/AdminRoutes'


import STOCK from '../stock/stock';
import USERS from '../users/users';
import REQUEST from '../Request/Request';
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
       <AdminRoute path="/home/profile"  component={PROFILE}/>
       <AdminRoute path="/home/stock"  component={STOCK}/>
       <AdminRoute path="/home/users"  component={USERS}/>
       <AdminRoute path="/home/product/categorey"  component={CATEGOREYHOME}/>
       <AdminRoute path="/home/product/brand"  component={BRANDHOME}/>
       <AdminRoute path="/home/product/subcategorey"  component={SUBCATEGOREY}/>
       <AdminRoute path="/home/product/product"  component={PRODUCTHOME}/>
       <AdminRoute path="/home/product/productdetails"  component={PRODUCTHOMEDETAILS}/>
       <AdminRoute exact path="/home/categoreyEditOne"  component={CATEGOREYEDITONE}/>
       <AdminRoute exact path="/home/brandEditOne"  component={BRANDEDITONE}/>
       <AdminRoute exact path="/home/SubcatEditOne"  component={SUBCATEDITONE}/>
       <AdminRoute exact path="/home/Request"  component={REQUEST}/>
    </Switch>
    </Router>
      </Container>


    </div>
  );
}


