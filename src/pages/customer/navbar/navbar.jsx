import React from 'react'
import {useHistory } from "react-router-dom";
import { Navbar, Nav,Button,NavDropdown } from "react-bootstrap"; 
import { TiThMenu } from "react-icons/ti";
import { MdShoppingCart } from "react-icons/md";

export default function Suppliernavbar({setmenubar,menubar}) {
  const history = useHistory();

 const menu=()=>{
 if(history.location.pathname!=="/sportsstore")return
 setmenubar(!menubar)
 } 
   
 const mainnavbar={
  backgroundColor: "rgb(134, 197, 230)"
 }
 const logout =()=>{
  history.push({pathname:"/"});
  localStorage.clear()
 }

    return (
       <Navbar style={mainnavbar} >
        <Nav.Link onClick={()=>menu()}><TiThMenu/></Nav.Link>
        <Navbar.Brand>SPORTSTORE</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/sportsstore">HOME</Nav.Link>
          <Nav.Link href="/sportsstore/profile">profile</Nav.Link>
          <Nav.Link href="/sportsstore/jersey">custom jersey</Nav.Link>
          <NavDropdown title="my orders" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sportsstore/jersey/orders">jersey order</NavDropdown.Item>
              <NavDropdown.Item href="/sportsstore/cart/orders">online-order</NavDropdown.Item>
         </NavDropdown>
        </Nav>
        <Nav className="ml-40">
       <Nav.Link className="pr-4" href="/sportsstore/cart">CART <MdShoppingCart/> </Nav.Link>  
       <Button  variant="danger" onClick={()=>logout()}>logout</Button>
       </Nav>
      </Navbar>
    )
}



