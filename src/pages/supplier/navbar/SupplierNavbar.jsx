import React from 'react'
import { Navbar, Nav } from "react-bootstrap"; 
 

export default function staffnavbar() {
    return (
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand>SupplierPanel</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/supplierhome/profile">profile</Nav.Link>
          <Nav.Link href="/supplierhome/Request">Request</Nav.Link>
          <Nav.Link href="/supplierhome/chats">chats</Nav.Link>
        </Nav>
      </Navbar>
    )
}
