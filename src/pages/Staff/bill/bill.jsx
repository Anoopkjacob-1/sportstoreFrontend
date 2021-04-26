
import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Table,Button,Col} from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import {toast} from 'react-toastify';


import axios from "axios";
import DeletButton  from "./DeletButton"
import  QuantityButton from "./QuantityButton";



import easyinvoice from 'easyinvoice';
import { v4 as uuidv4 } from 'uuid';

toast.configure()
export default function Bill() { 
  
const userid =localStorage.getItem('loginid');
const [DATA, setData] = useState([]);
const [finavalues, setvalues] = useState(0)
let value=0;


// console.log(DATA)

    useEffect(() => {
        try {
          async function userdatfetch1() {
            await axios({
              method: "post",
              url: "http://localhost:5000/bill/billGet",
              data:{userid}
            }).then((resp) => {

              const response = resp.data;
            //  console.log(response)
              setData(response);
          
            });
          }
          userdatfetch1();
        
        } catch (e) {
          console.error(e);
        }
      }, [userid]);

      // total button

  const handlechange=()=>
  {
    
   const result=DATA.map((item )=> value+=item.Totalprice);
    setvalues(result[result.length-1])
  }    

// invoice

const generate =async()=>{
  const product =  DATA.map(item=>{
    return (
        {  
            "quantity": item.noofitems,
            "description":item.productId.productname,
            "tax": 0,
            "price": item.productId.unitprice
        }
    )
 });
console.log(product)
const name=uuidv4()
const data = {

 "currency": "INR",
 "taxNotation": "vat", //or gst
 "marginTop": 25,
 "marginRight": 25,
 "marginLeft": 25,
 "marginBottom": 25,

 "sender": {
     "company": "Royal Sports",
     "address": "2nd floor Wilson tower,kottyam",
     "zip": "686011",
     "city": "kottayam",
     "country": "india"
  
 },

"invoiceNumber": Date.now(),
"invoiceDate": new Date().toDateString(),
 "products": product,
 "bottomNotice": "thank you for choosing us"
};

const result = await easyinvoice.createInvoice(data);                       
easyinvoice.download(`${name}.pdf`, result.pdf);
}

// submit form

const onsubmithandlechange =async()=>{


  try {
    axios
      .put(`http://localhost:5000/bill/billsubmit`,{userid})
      .then((resp) => {
        console.log(resp);

        if(resp.data.message==="billed") {
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
    }
    catch (e) {
      console.error(e);
    }
 }
 if(DATA.length===0){
   return(
    <h1>Sorry! No products added to bill section</h1>
   );
 }

if(DATA.length!==0){
    return (
  <div>
<Container>
<h1>Bill Section</h1>
<Row  className="row mt-5">

<div>
  <form>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>PRODUCT</th>
      <th>size</th>
      <th>Color</th>
      <th>price</th>
      <th>quantity</th>
      <th>Total price</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
 
    {DATA.map(item=>{
      return(
        <tr key={item._id}>
       <td>{item.productId.productname}</td>
       <td>{item.productId.size}</td>
       <td>{item.productId.color}</td>
       <td>{item.productId.unitprice}</td>
       <td><QuantityButton Rows={item} /></td>
       <td>{item.Totalprice}</td>
       <td><DeletButton Rows={item} /></td>
       </tr>     
      )
    })
    }

  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td><input type="text" readOnly value={finavalues} /></td>
      <td><Button variant="warning" onClick={()=>handlechange()}>total</Button></td>
    </tr>
  </tfoot>
</Table>
<Row>
<Col xs={12} md={8}> </Col>
<Col xs={6} md={4}>
 <Button variant="danger" onClick={()=>generate()}>INVOICE <FaFilePdf/></Button>
 <Button type="submit" variant="success" className="m-3"  onClick={()=>onsubmithandlechange()}>Submit</Button>
</Col>
</Row>
</form>
 </div>
 
</Row>
</Container>
        </div>
    );
}
}
