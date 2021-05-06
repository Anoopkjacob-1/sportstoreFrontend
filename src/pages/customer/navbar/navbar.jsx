import React from 'react'
import {useHistory } from "react-router-dom";
import { Navbar, Nav,Button } from "react-bootstrap"; 
import { TiThMenu } from "react-icons/ti";
import { MdShoppingCart } from "react-icons/md";

export default function Suppliernavbar({setmenubar,menubar}) {
  const history = useHistory();

  
 const mainnavbar={
  backgroundColor: "rgb(134, 197, 230)"
 }
 const logout =()=>{
  history.push({pathname:"/"});
  localStorage.clear()
 }

    return (
       <Navbar style={mainnavbar} >
        <Nav.Link onClick={()=>setmenubar(!menubar)}><TiThMenu/></Nav.Link>

        <Navbar.Brand>SPORTSTORE</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/sportsstore">HOME</Nav.Link>
          <Nav.Link href="/sportsstore/profile">profile</Nav.Link>
        </Nav>
        <Nav className="ml-40">
       <Nav.Link className="pr-4" href="/sportsstore/cart">CART <MdShoppingCart/> </Nav.Link>  
       <Button  variant="danger" onClick={()=>logout()}>logout</Button>
       </Nav>
      </Navbar>
    )
}



