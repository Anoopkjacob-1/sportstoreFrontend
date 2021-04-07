import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {toast} from 'react-toastify';
import axios from "axios";
toast.configure()

export default function ActionButton({Rows}) {

    const statuss=Rows.values.status

    const handleclick =async (Rows,action) => {    
        const values= Rows.values.email
        console.log(values)
try{
            await axios.put(`http://localhost:5000/app/profileActivate`,{email:values,action:action}).then(resp=>{
            
                    if(resp.request.status===200) {
                        toast.success(`${resp.data.message}`,{
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined});
                        setTimeout(()=>window.location = "/home",2000)
                    
                }else{
                    toast.error(`${resp.data.message}`,{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined})
                }
                });
                
    }catch(e){
        console.log(e.data)
         }
}
const active="ACTIVE ";
const inactive="INACTIVE"


    return (
        <div>
         
         <Button variant="success" onClick={e =>handleclick(Rows,active)}>
            Activate
          </Button>
      <Button variant="danger" onClick={e =>handleclick(Rows,inactive)}>
        INACTIVE
          </Button>
          
        </div>
    )
}


    