import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

import { TiArrowRightThick } from "react-icons/ti";


export default function EditButton({Rows}) {
const history = useHistory();
 const [RowTerm, setRowTerm] = useState(Rows)

   const handlepage=(Rows)=>{
    setRowTerm(Rows);
    history.push({pathname:"/home/Request",state:RowTerm});
   }     

    return (
        <div>
         
        <Button variant="warning" className="m-2 " onClick={()=>handlepage(Rows)}  >
           <TiArrowRightThick/>
        </Button>
     
        </div>
    )
}


    