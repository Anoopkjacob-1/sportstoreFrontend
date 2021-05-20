import React from "react";
import { IoFilterSharp } from "react-icons/io5";
// import {Form } from "react-bootstrap";

// 
export default function Sidebar() {
  const uicss = {
    backgroundColor: "rgb(134, 197, 230)" ,
    display: "flex",
    aligItems: "center",
    justifyContent: "center",
    marginLeft:"-20px",
    marginTop:"50px"
  }


  
  // const [DataBrand, setDataBrand] = useState([])
  // const [DataCat, setDataCat] = useState([])

  // useEffect(() => {
  //   try {
  //     async function userdatfetch1() {
  //       await axios({
  //         method: "Get",
  //         url: "http://localhost:5000/product/brandGet",
  //       }).then((resp) => {
  //         const response = resp.data;
  //         setDataBrand(response);
  //       });
  //     }
  //     userdatfetch1();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

  // useEffect(() => {
  //   try {
  //     async function userdatfetch2() {
  //       await axios({
  //         method: "Get",
  //         url: `http://localhost:5000/product/categoreyGet`,
  //       }).then((resp) => {
  //         const response = resp.data;
  //         setDataCat(response);
  //       });
  //     }
  //     userdatfetch2();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);




  return (
    <aside
      style={uicss}
      className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left pr-4 "
    >
      <ul style={{ listStyleType: "none",marginTop:"150px"}} className="mr-4">
      <IoFilterSharp/> Filter
        <li>anoop</li>
        <li>anoop</li>
        <li>anoop</li>
      </ul>
    </aside>
  );
}

