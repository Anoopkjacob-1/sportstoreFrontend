import React,{useState} from 'react'
import {storage} from '../../../utils/firebase'

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { IoIosCloudUpload } from "react-icons/io";

// import * as Yup from "yup";
import axios from "axios";


import { toast } from "react-toastify";
toast.configure();

export default function Imagefirebase({Rows}) {
const[image,Setimage]=useState(null)

    const handleChange =(e)=>{
        if(e.target.files[0].name)
        {
            Setimage(e.target.files[0])
        }
    }
    
    const handleUpload= async()=>{
        try {
        // console.log(image.name)
        const uploadTask=storage.ref(`productimages/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot=>{},
            error =>{
                console.log(error)
            },
            ()=>{
                storage
                .ref("productimages")
                .child(image.name)
                .getDownloadURL()
                .then(url=>{
                    console.log(url)
                            axios
                                .put(`http://localhost:5000/product/imageupload`, {
                                url:url,
                                productid: Rows.original.productid,
                                })
                                .then((resp) => {
                                console.log(resp);
                        
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
                                    }, 3000);
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
            )
            } catch (e) {
              console.log(e.data);
            }
    }

    return (

        <div>
         <input type="file" onChange={handleChange}  />
         <Button variant="dark" type="submit" className="submitbtn p-2 m-4" onClick={handleUpload} >
           <span>upload <IoIosCloudUpload/></span> 
          </Button>
        </div>

    )
}
