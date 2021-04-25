import React,{useState,useEffect} from 'react';
import { Container } from "react-bootstrap";
import axios from "axios";

import Card from './cards'

export default function RequestCard() {


  const [DATA, setDATA] = useState([])
 
  useEffect(() => {
    try {
      async function userdatfetch1() {
        await  axios
        .post(`http://localhost:5000/supplier/requestgetwithid`,{supplierid:localStorage.getItem("loginid")})
        .then((resp) => {
          const response = resp.data;
          setDATA(response);
          console.log(DATA)
        });
      }
      userdatfetch1();
    } catch (e) {
      console.error(e);
    }
  }, [DATA]);




  return (
    <Container>
    
        {DATA.length &&
              DATA.map((item) => {
                  return(
           <Card item={item} key={item._id}/>
              )
            })}
    </Container>
  );
}


 