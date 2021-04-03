import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function homepage() {
  return (
    <div>
    
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>SportStore</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home/profile">profile</Nav.Link>
          <Nav.Link href="/home/productAdd">Product Add</Nav.Link>
        </Nav>
      </Navbar>
      <div>
    <h1>welcome</h1>
    <p>Email: {localStorage.getItem("myemail")}</p>
      </div>
    </div>
  );
}
