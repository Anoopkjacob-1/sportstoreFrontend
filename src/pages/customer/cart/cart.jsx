import React,{useState,useEffect} from 'react'

import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";

import Cartcard from './cartcards'

export default function Cart() {

    const [Data, setDATA] = useState([])
    const [Totalprice, setTotalprice] = useState(0)

    useEffect(() => {
        try {
          async function userdatfetch1() {
            await  axios
            .post(`http://localhost:5000/cart/get`,{customerid:localStorage.getItem("loginid"),status:"cart"})
            .then((resp) => {
              const response = resp.data;
              setDATA(response);  
             
            });
          }
          userdatfetch1();
        } catch (e) {
          console.error(e);
        }
      }, []);
   
      useEffect(() => {
        try {
          async function userdatfetch1() {
            await  axios
            .post(`http://localhost:5000/cart/total`,{customerid:localStorage.getItem("loginid")})
            .then((resp) => {
              const response = resp.data;
              setTotalprice(response);  
            });
          }
          userdatfetch1();
        } catch (e) {
          console.error(e);
        }
      }, []);
 
   
    
  if(Data.length!==0){
    return (
        <Container>
        <Row className="justify-content-center my-2 pb-3">
     {Data.length &&
              Data.map((item) => {
                return (
                  <Cartcard data={item} key={item._id}/> 
                  
                );
              })}
             Totalprice:{Totalprice} 
           </Row>
       </Container>
    )
  }else{
    return (
       <Container>
           <Row>
               <Col>
                <h1>NO PRODUCTS ADDED</h1>
               </Col>
           </Row>
       </Container>
    )
  }
   
}




  