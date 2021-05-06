import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";

import ProductCard from './productcard'


export default function Home() {
    const [Dataproduct, setproduct] = useState([])

    useEffect(() => {
        try {
          async function userdatfetch() {
            await axios({
              method: "Get",
              url: "http://localhost:5000/product/productGet",
            }).then((resp) => {
              const response = resp.data;
              setproduct(response)
            });
          }
          userdatfetch();
        } catch (e) {
          console.error(e);
        }
      }, []);
    
  if(Dataproduct!==""){
    return (
        <Container>
        <Row>
  {Dataproduct.length &&
              Dataproduct.map((item) => {
                return (
                  <ProductCard data={item} key={item._id}/> 
                );
              })}
           
           </Row>
       </Container>
    )
  }else{
    return (
       <Container>
           <Row>
               <Col>
                <h1>currently  not available</h1>
               </Col>
           </Row>
       </Container>
    )
  }
   
}
