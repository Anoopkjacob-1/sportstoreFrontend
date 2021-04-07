import React from "react";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";
import { FaBell } from 'react-icons/fa';


import Users from '../users/users'

export default function Homepage() {

  
  return (
    <div>
    
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>SportStore</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home/profile">profile</Nav.Link>
         <Nav.Link className="navbar-right" href="">Stock</Nav.Link>
         <Nav.Link className="navbar-right" href="">users</Nav.Link>
          <NavDropdown title="Product Add" id="basic-nav-dropdown">
              <NavDropdown.Item href="">categorey</NavDropdown.Item>
              <NavDropdown.Item href="">Sub-categorey</NavDropdown.Item>
              <NavDropdown.Item href="">Brand</NavDropdown.Item>
              <NavDropdown.Item href="">Product</NavDropdown.Item>
         </NavDropdown>
         <Nav.Link className="navbar-right" href=""><FaBell/> requests</Nav.Link>
        </Nav>
      </Navbar>
      <div>
       
       <Users/>

      </div>
    </div>
  );
}
