import React,{useState,useEffect} from 'react';
import { Container,Row} from "react-bootstrap";
import Table from '../../../componenets/Table/Table'
import StockUpdate from './StockUpdate'
import Imagefirebase from './Imagefirebase'
import './stock.css'
import axios from "axios";


export default function STOCK() {

  const [DATA, setData] = useState([]);

    useEffect(() => {
        try {
          async function userdatfetch1() {
            await axios({
              method: "Get",
              url: "http://localhost:5000/product/productGet",
            }).then((resp) => {

              const response = resp.data;
    
              setData(response);
            });
          }
          userdatfetch1();
        } catch (e) {
          console.error(e);
        }
      }, []);


   const COLUMNS=[
        {
            Header:'PRODUCT',
            accessor:'productname'
        },
        {
            Header:'Categorey',
            accessor:'categoreyno.categoreyname'
        },
        {
            Header:'sub-Categorey',
            accessor:'subcatno.subcategoreyname'
        },
        {
            Header:'brand',
            accessor:'brandno.brandname'
        },
        {
            Header:'size',
            accessor:'size'
        },
        {
            Header:'units',
            accessor:'units'
        },
        {
            Header:'color',
            accessor:'color'
        },
        {
            Header:'stock',
            accessor:'quantity'
        },
        {
            Header:'Stock update',
            accessor:'_id',
            Cell: ({ row}) => (
              <StockUpdate Rows={row} />)
        },
        {
          Header:'Image Upload',
          accessor: "productid",
          width: 100,
          Cell:({row})=>(
            <Imagefirebase Rows={row}/>
          )
       }    
      ]  

    return (
  <div>
<Container>
<Row  className="row">
  <h1>PRODUCT STOCK</h1>

  <Table  COLUMNS={COLUMNS} DATA={DATA} />

</Row>
</Container>
  
        </div>
    )
}
