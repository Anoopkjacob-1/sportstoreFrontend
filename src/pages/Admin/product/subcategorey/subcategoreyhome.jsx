import React,{useState,useEffect} from "react";
// import EditButton from './EditButton' ;
// import Table from '../../../../componenets/Table/Table'
// import { IoArrowBackCircle } from "react-icons/io5";
// import { Button} from "react-bootstrap";
import axios from "axios";

import Subcategorey from './subcategorey'

export default function Subcategoreyhome() {
  const [DataCat, setDataCat] = useState([]);
  const [DataBrand, setDataBrand] = useState([]);

  // const [TABLE, setTable] = useState(false);

 
  useEffect(() => {
    try {
      async function userdatfetch1() {
        await axios({
          method: "Get",
          url: "http://localhost:5000/product/brandGet",
        }).then((resp) => {
          const response = resp.data;
          setDataBrand(response);     
        });
      }
      userdatfetch1();
    } catch (e) {
      console.error(e);
    }
  }, []);


  useEffect(() => {
    try {
      async function userdatfetch2() {
        await axios({
          method: "Get",
          url: `http://localhost:5000/product/categoreyGet`,
        }).then((resp) => {
          const response = resp.data;
             setDataCat(response)
        });
      }
      userdatfetch2();
    } catch (e) {
      console.error(e);
    }
  }, []);

 


// console.log(catarray)
  // const COLUMNS=[
  //   {
  //       Header:'Brand',
  //       accessor:'brandname'
  //   },
  //   {
  //       Header: "Action",
  //       accessor: "brandid",
  //       Cell: ({ row,getdata}) => (
  //         <EditButton Rows={row} />        
  //       )
  //     }
  // ]

  return (
    <div>
      <div className="p-4 m-3">
            {/* {
            TABLE ?
          <div>
          <Button variant="info" type="button" className="submitbtn m-2" onClick={()=>setTable(!TABLE)}>
         <IoArrowBackCircle />    
         </Button>  
            <Table  COLUMNS={COLUMNS} DATA={DATA} />
          </div>
        :    */}
        {/* // <Brand  setTable={setTable} TABLE={TABLE} />
     }  */}

        <Subcategorey DataCat={DataCat} DataBrand={DataBrand}/>
      </div>
   
    </div>

  );
}

//  table





