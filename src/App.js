import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import LOGIN from './pages/login/';
import REGISTRATION from './pages/registration/';
import HOME from './pages/Admin/hoempage/';


function App() {
  return (
    <Router>
    <Switch>
       <Route path="/registration"  component={REGISTRATION}/>
       <Route path="/home"  component={HOME}/>
       <Route path="/" exact component={LOGIN}/>
    </Switch>
    </Router>
   
    
  );
}

export default App;
