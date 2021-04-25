import React,{useEffect,useState} from 'react';
import Table from '../../../componenets/Table/Table'
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";



import  { COLUMNS } from './Columns'

export default function Users() {

  const [DATA,setData] = useState([])

  
useEffect( () => {
  try {
async function userdatfetch () {
  await axios({
      method: 'Get',
      url: 'http://localhost:5000/app/userdata'
    }).then(resp=>{   
      const response=resp.data;
      setData(response)
    });
 }
 userdatfetch();
  } catch (e) {
      console.error(e);
  }
}, []);

    return (
        <div>
    

      <Container>
      <Row className="mt-3">
      
      <Col className="mt-2">
      {DATA.length!==0 ?
               <div>
                 <h1>USER CONTROLS</h1>
                  <Table  COLUMNS={COLUMNS} DATA={DATA} />
               </div>
               :<h1>Loading....</h1> 
          }
      </Col>
      </Row>
     
      </Container>
      
        </div>
    )
}

