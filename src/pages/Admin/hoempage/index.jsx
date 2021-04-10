import React from "react";
import {Container} from "react-bootstrap";
import AdminNavbar from '../../../componenets/AdminNavbar'
// import Profile from '../../../componenets/profile'
import AsynDropdown from '../../../componenets/AsyncDropdown/AsyncDropdown'



export default function Homepage() {

  
  return (
    <div>
      <AdminNavbar/>
      <Container>
      
       {/* <Profile/> */}
    <AsynDropdown/>
     
      </Container>
    </div>
  );
}
