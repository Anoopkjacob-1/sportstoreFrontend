import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';


import { AdminRoute } from "./Routes/AdminRoutes";
import { StaffRoute } from "./Routes/StaffRoutes";
import { SupplierRoute } from "./Routes/SupplierRoutes";

import LOGIN from './pages/login/';
import REGISTRATION from './pages/registration/';
import HOME from './pages/Admin/hoempage/';
import STAFF from './pages/Staff/';
import CUSTOMER from './pages/customer/';
import SUPPLIER from './pages/supplier/';


function App() {
  return (
    <Router>
    <Switch>
       <Route path="/registration"  component={REGISTRATION}/>
       <AdminRoute path="/home"  component={HOME}/>
       <StaffRoute path="/staffhome"  component={STAFF}/>
       <SupplierRoute path="/supplierhome"  component={SUPPLIER}/>
       <Route path="/sportsstore"  component={CUSTOMER}/>
       <Route path="/" exact component={LOGIN}/>
       <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
    </Router>
   
    
  );
}

export default App;
