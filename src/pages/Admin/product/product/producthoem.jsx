import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "./productsubcategorey";

export default function Subcategoreyhome() {
  const [DataCat, setDataCat] = useState([]);
  const [DataBrand, setDataBrand] = useState([]);

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
          setDataCat(response);
        });
      }
      userdatfetch2();
    } catch (e) {
      console.error(e);
    }
  }, []);



  return (
    <div>
      <div className="p-4 m-3">
        
        <Product
        DataCat={DataCat}
        DataBrand={DataBrand}
        // setTable={setTable}
        // TABLE={TABLE}
      />  
      </div>
    </div>
  );
}

//  table
