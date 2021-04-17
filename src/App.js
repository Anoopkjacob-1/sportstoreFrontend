import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

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
       <Route path="/home"  component={HOME}/>
       <Route path="/staffhome"  component={STAFF}/>
       <Route path="/supplierhome"  component={SUPPLIER}/>
       <Route path="/sportsstore"  component={CUSTOMER}/>
       <Route path="/" exact component={LOGIN}/>
    </Switch>
    </Router>
   
    
  );
}

export default App;
