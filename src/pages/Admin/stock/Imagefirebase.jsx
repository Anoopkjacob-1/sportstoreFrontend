import React, { useState } from "react";
import { storage } from "../../../utils/firebase";


import { Button, Spinner } from "react-bootstrap";
import { IoIosCloudUpload } from "react-icons/io";

// import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
toast.configure();

export default function Imagefirebase({ Rows }) {
  const [image, Setimage] = useState(null);
  const [error, Seterror] = useState("");
  const [loading, Setloading] = useState(true);

  const handleChange = (e) => {
    if(e.target.files.length===0)Seterror("Please select image.");
    else
    {
   if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))  Seterror("Please select valid image.");
   else if(e.target.files[0].name); Setimage(e.target.files[0]);
   if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))  Seterror("Please select valid image.");
   else if(e.target.files[0].name) Seterror("");
    } 
  };

  const handleUpload = async () => {
 
    if(!image){
        Seterror("required")
    } 
    else if(!image.name.match(/\.(jpg|jpeg|png|gif)$/))
    {
        Seterror("Please select valid image.");
    }
    else{
    try {
      Setloading(false);
      console.log(image.name);
      const uploadTask = storage.ref(`productimages/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("productimages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              axios
                .put(`http://localhost:5000/product/imageupload`, {
                  url: url,
                  productid: Rows.original.productid,
                })
                .then((resp) => {
                  console.log(resp);
                  Setloading(true);
                  if (resp.data.message === "image updated") {
                    toast.success(`${resp.data.message}`, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                    });
                    setTimeout(() => {
                      window.location.reload(false);
                    }, 100);
                  } else {
                    toast.error(`${resp.data.message}`, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                });
            });
        }
      );
    } catch (e) {
      console.log(e.data);
    }
  }
  };

  return (
    <div>
      {loading ? (
        <>
          <input type="file" onChange={handleChange} />
          {error?<span style={{color:"red"}}>{error}</span>:""}
          <Button
            variant="dark"
            type="submit"
            className="submitbtn p-2 m-4"
            onClick={handleUpload}
          >
            <span>
              upload <IoIosCloudUpload />
            </span>
          </Button>
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
}
