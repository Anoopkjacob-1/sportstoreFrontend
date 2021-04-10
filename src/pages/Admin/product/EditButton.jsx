import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {toast} from 'react-toastify';
import axios from "axios";
toast.configure()

export default function EditButton({Rows}) {

//   console.log(Rows.values)
//  const handleclick =async (Rows) => {    
//      const values= Rows.values
//      console.log(values)
// try{
//             await axios.put(`http://localhost:5000/app/profileActivate`,{id:values.id,categoreyname:values.categoreyname}).then(resp=>{
            
//                     if(resp.request.status===200) {
//                         toast.success(`${resp.data.message}`,{
//                         position: "bottom-right",
//                         autoClose: 5000,
//                         hideProgressBar: true,
//                         closeOnClick: true,
//                         pauseOnHover: false,
//                         draggable: true,
//                         progress: undefined});

//                         setTimeout(()=> window.location.reload(false),2000)
                    
//                 }else{
//                     toast.error(`${resp.data.message}`,{
//                     position: "bottom-right",
//                     autoClose: 5000,
//                     hideProgressBar: true,
//                     closeOnClick: true,
//                     pauseOnHover: false,
//                     draggable: true,
//                     progress: undefined})
//                 }
//                 });
                
//     }catch(e){
//         console.log(e.data)
//          }
// }

          

    return (
        <div>
         
        <Button variant="success" className="m-2 "  onClick={handleclick}>
            Edit
          </Button>
        
        </div>
    )
}


    