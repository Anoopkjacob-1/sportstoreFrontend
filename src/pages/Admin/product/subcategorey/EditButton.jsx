import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";


export default function EditButton({Rows}) {
const history = useHistory();
 const [RowTerm, setRowTerm] = useState(Rows.values)

   const handlepage=(Rows)=>{
      
    setRowTerm(Rows.values);
 
    history.push({pathname:"/home/brandEditOne",state:RowTerm});

   }     

    return (
        <div>
         
        <Button variant="warning" className="m-2 " onClick={()=>handlepage(Rows)}  >
            Edit
        </Button>
     
        </div>
    )
}


    