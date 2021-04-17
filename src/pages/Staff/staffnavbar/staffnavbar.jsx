import React from 'react'
import { Navbar, Nav } from "react-bootstrap"; 
 

export default function staffnavbar() {
    return (
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Staffpanel</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/staffhome/profile">profile</Nav.Link>
          <Nav.Link href="/staffhome/stock">Stock</Nav.Link>
          <Nav.Link href="/staffhome/bill">Bill</Nav.Link>
        </Nav>
      </Navbar>
    )
}
