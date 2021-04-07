import React,{useEffect,useState} from 'react';
import Table from '../../../componenets/Table/Table'
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
          {DATA!==""?
               <Table  COLUMNS={COLUMNS} DATA={DATA} />
               :<h1>Loading....</h1> 
          }
        </div>
    )
}

