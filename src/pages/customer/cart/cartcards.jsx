import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import { FaPlus,FaMinus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {toast} from 'react-toastify';
import axios from "axios";

export default function Cartcards({ data }) {

    const minusaction=()=>{
     console.log("minus")
    };
    const plusaction=()=>{
        console.log("plus") 
    };

  const cartdelete =(_id)=>{
    try {
      axios
        .post(`http://localhost:5000/cart/delete`,{_id})
        .then((resp) => {
          console.log(resp);
          if(resp.data.message==="deleted") {
            toast.success(`${resp.data.message}`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined});
              setTimeout(() => {
                window.location.reload(false)
              }, 3000);
          }else{
            toast.error(`${resp.data.message}`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined});
          }
        });
    } catch (e) {
      console.log(e.data);
    }
  }  

  return (
    <Card
      style={{ width: "70rem" }}
      text="dark"
      className="text-center p-4 m-4"
    >
        <Card.Header style={{ display: "flex",justifyContent:"flex-end"}}>
          <Button variant="danger" onClick={()=>cartdelete(data._id)}><GrClose/></Button>
       </Card.Header>
      <Card.Body className="p-2">
        <Card.Title className="p-1">{data.productid.productname}</Card.Title>
        <Card.Text className="text-center">
      
          <strong>
            size:{data.productid.size}{data.productid.units} || Color:
            {data.productid.color} || Price:{data.productid.unitprice}{" || "}
          </strong>
       
          <span>
              <strong>Quantity</strong>
            <Button
              variant="danger"
              type="submit"
              className="m-2 minus"
              onClick={() => minusaction()}
            >
              <FaMinus />
            </Button>
            <input type="text" value={data.quantity} readOnly />
            <Button
              variant="success"
              type="submit"
              className="m-2 plus"
              onClick={() => plusaction()}
            >
              <FaPlus />
            </Button>
           <strong>|| price: </strong> 
           <input type="text" value={data.totalprice} readOnly />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
