
import React,{useState,useEffect} from 'react';
import { Container,Row} from "react-bootstrap";
import Table from '../../../componenets/Table/Table'

import axios from "axios";
import DeletButton  from "./DeletButton"
import  QuantityButton from "./QuantityButton";




export default function Bill() { 
const userid =localStorage.getItem('loginid');
const [DATA, setData] = useState([]);

    useEffect(() => {
        try {
          async function userdatfetch1() {
            await axios({
              method: "post",
              url: "http://localhost:5000/bill/billGet",
              data:{userid}
            }).then((resp) => {

              const response = resp.data;
             console.log(response)
              setData(response);
            });
          }
          userdatfetch1();
        
        } catch (e) {
          console.error(e);
        }
      }, []);


      // for (let index = 0; index < DATA.length; index++) {
      //   let grandtotal = 0
      //   grandtotal = grandtotal+DATA[index].Totalprice;
      // }


   const COLUMNS=[
        {
            Header:'PRODUCT',
            accessor:'productId.productname'
        },
        {
            Header:'size',
            accessor:'productId.size'
        },
        {
            Header:'units',
            accessor:'productId.units'
        },
        {
            Header:'color',
            accessor:'productId.color'
        },
        {
          Header:'price',
          accessor:'productId.unitprice'
       },
        {
            Header:'stock',
            accessor:'productId.quantity',
            Cell: ({ row}) => (
                <QuantityButton Rows={row} /> 
                )
        },
        {
          Header:'Total price',
          accessor:'Totalprice',
      },
       {
        Header:'Delete',
        accessor: "productId._id",
        Cell: ({ row}) => (
          <DeletButton Rows={row} />        
        )
     }    
      ]  

    return (
  <div>
<Container>
<h1>Bill Section</h1>
<Row  className="row">
  
  <Table  COLUMNS={COLUMNS} DATA={DATA} />
</Row>
</Container>
  
        </div>
    )
}
