import React from 'react'
import {useHistory } from "react-router-dom";
import { Navbar, Nav,NavDropdown,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaBell } from 'react-icons/fa';

export default function AdminNavbar(props) {
 const history = useHistory();

 const mainnavbar={
  backgroundColor: "rgb(25, 84, 71)"
 }
 const logout =()=>{
  history.push({pathname:"/"});
  localStorage.clear()
 }

    return (
        <div>       
      <Navbar variant="dark" className="mainnavbar" style={mainnavbar}>
        <Navbar.Brand><Nav.Link href="/home">SportStore</Nav.Link></Navbar.Brand>
        <Nav className="mr-auto" activeKey={props.pathname} >
          <Nav.Link href="/home/profile">profile</Nav.Link>
         <Nav.Link className="navbar-right" href="/home/stock">Stock</Nav.Link>
         <NavDropdown title="user management" id="basic-nav-dropdown">
         <NavDropdown.Item  href="/home/users">users</NavDropdown.Item>
         <NavDropdown.Item  href="/home/staffreg">staff registration</NavDropdown.Item>
         </NavDropdown>
          <NavDropdown title="Product Add" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home/product/categorey">categorey</NavDropdown.Item>
              <NavDropdown.Item href="/home/product/subcategorey">Sub-categorey</NavDropdown.Item>
              <NavDropdown.Item href="/home/product/brand">Brand</NavDropdown.Item>
              <NavDropdown.Item href="/home/product/product">Product</NavDropdown.Item>
         </NavDropdown>
         <Nav.Link className="navbar-right" href="/home/Request"><FaBell/> requests</Nav.Link>
        </Nav>
        <Button className="ml-40" variant="danger" onClick={()=>logout()}>logout</Button>
      </Navbar>
        </div>
    )
}


   