import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Spinner,
} from "react-bootstrap";
import {useHistory } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import InputColor from "react-input-color";
import { toast } from "react-toastify";
import { storage } from "../../../utils/firebase";
import { IoIosCloudUpload } from "react-icons/io";
import axios from "axios";

// default kits

import one from "../../../Assets/images/kits/one.png";
import two from "../../../Assets/images/kits/two.png";
import three from "../../../Assets/images/kits/three.png";
import four from "../../../Assets/images/kits/four.png";

export default function Jersey() {
  const history = useHistory();
  toast.configure();
  const initial = "#18ededb8";

  
  const [defaultkit, setdefaultkit] = useState("");
  const [primarycolor, setPrimaryColor] = useState({});
  const [Secondarycolor, setSecondaryColor] = useState({});
  const [selectarray, setselectarray] = useState([]);
  const [imageurl, setimageurl] = useState("");
  const [discrption, setdiscrption] = useState("");

  // image
  const [image, Setimage] = useState(null);
  const [error, Seterror] = useState("");
  const [loading, Setloading] = useState(true);
 

  // errors
  const [imageerror, Setimageerror] = useState("");
  const [colorerror,setcolorerr]=useState("")
  const [sizeerror,setsizeerror]=useState("")
  const [descerror,setdescerror]=useState("")


  const selected = {
    borderColor: "red",
    borderWidth: "3px",
  };
  const nonselected = {
    borderColor: "blue",
    borderWidth: "0px",
  };

  const handleChange = (newValue) => {
    const result = newValue.map((i) => {
      return i.value;
    });

    setselectarray(result);
  };

  const handleChange2 = (e) => {
    if (e.target.files.length === 0) {
      Seterror("No image selected");
    } else {
      if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))
        Seterror("Please select valid image.");
      else if (e.target.files[0].name);
      Setimage(e.target.files[0]);
      if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))
        Seterror("Please select valid image.");
      else if (e.target.files[0].name) Seterror("");
    }
  };

  const handleUpload = async () => {
    if (!image) {
      Seterror("required");
    } else if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      Seterror("Please select valid image.");
    } else {
      try {
        Setloading(false);
        console.log(image.name);
        const uploadTask = storage
          .ref(`jerseyorderimages/${image.name}`)
          .put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("jerseyorderimages")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setimageurl(url);
                Setloading(true);
              });
          }
        );
      } catch (e) {
        console.log(e.data);
      }
    }
  };

  const onsubmit = () => {

if(imageurl==="" && defaultkit ===""){
  Setimageerror("upload jersey image or select one of the default design")
  return;
}else   Setimageerror("");

 if(primarycolor.hex==="#18ededb8" && Secondarycolor.hex==="#18ededb8"){
  setcolorerr("select primary and secondary color from color picker")
  return;
}
else if(primarycolor.hex===Secondarycolor.hex)
{
  setcolorerr("primary and secondary should be different")
  return;
}else setcolorerr("");

if(selectarray.length===0){
  setsizeerror("Enter sizes and no of jersey  accordingly")
  return;
}else setsizeerror("");

if(discrption===""){
  setdescerror("please enter discription")
  return;
}else setdescerror("");

try {
  axios
    .post(`http://localhost:5000/jersey/add`, {
      loginid:localStorage.getItem("loginid"),
      default:defaultkit,
      imageurl: imageurl,
      primarycolor:primarycolor.hex,
      Secondarycolor:Secondarycolor.hex,
      sizeandnoof:selectarray,
      discrption:discrption,
    })
    .then((resp) => {
      if (resp.data.message === "successfull") {
        toast.success(`${resp.data.message}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push({pathname:"/sportsstore"});
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
} catch (e) {
  console.log(e.data);
}

  };

  return (
    <Container fluid="sm" className="mainconatiner">
      <Row className="center_row">
        <Col>
          <Form className="register_form p-5 " >
            <h1 className="p-3 ">Custom jesrey</h1>
            <Form.Label>Default jersey select one</Form.Label>
            <Form.Row className="ml-4">
              <Form.Group as={Col} controlId="formGridjeserykit">
                <Button
                  onClick={() => setdefaultkit("one")}
                  onDoubleClick={() => setdefaultkit("")}
                  style={defaultkit === "one" ? selected : nonselected}
                >
                  <Image src={one} width="100vh" height="100vh" rounded />
                  <Form.Text>ONE</Form.Text>
                </Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridjeserykit">
                <Button
                  onClick={() => setdefaultkit("two")}
                  onDoubleClick={() => setdefaultkit("")}
                  style={defaultkit === "two" ? selected : nonselected}
                >
                  <Image src={two} width="100vh" height="100vh" rounded />
                  <Form.Text>TWO</Form.Text>
                </Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridjeserykit">
                <Button
                  onClick={() => setdefaultkit("three")}
                  onDoubleClick={() => setdefaultkit("")}
                  style={defaultkit === "three" ? selected : nonselected}
                >
                  <Image src={three} width="100vh" height="100vh" rounded />
                  <Form.Text>THREE</Form.Text>
                </Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridjeserykit">
                <Button
                  onClick={() => setdefaultkit("four")}
                  onDoubleClick={() => setdefaultkit("")}
                  style={defaultkit === "four" ? selected : nonselected}
                >
                  <Image src={four} width="100vh" height="100vh" rounded />
                  <Form.Text>FOUR</Form.Text>
                </Button>
              </Form.Group>
            </Form.Row>
             <Form.Text className="text-center" style={{color:"red"}}>{imageerror}</Form.Text>
            <Form.Row className="text-center">
              <Form.Group as={Col} controlId="formGridprimarycolor">
                <Form.Text>primary color</Form.Text>
                <InputColor initialValue={initial} onChange={setPrimaryColor} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSecondarycolor">
                <Form.Text>secondarycolor</Form.Text>
                <InputColor
                  initialValue={initial}
                  onChange={setSecondaryColor}
                />
              </Form.Group>
            </Form.Row>
            <Form.Text className="text-center" style={{color:"red"}}>{colorerror}</Form.Text>
            <Form.Row className="text-center">
              <Form.Label>jersey image</Form.Label>
              {loading ? (
                <Form.Group as={Col} controlId="formGridimageupload">
                  <input type="file" onChange={handleChange2} />
                  {error ? <span style={{ color: "red" }}>{error}</span> : ""}
                  {<span style={{color:"green",fontSize:"15px"}}>{imageurl!==""?"one file uploaded success":""}</span>}
                  {error === "" ? (
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

                  ) : (
                    ""
                  )}
                </Form.Group>
              ) : (
                <Spinner className="ml-4 p-2" animation="border" />
              )}
            </Form.Row>
          
            <Form.Row>
              <Form.Group as={Col} controlId="formGridselect">
                <CreatableSelect
                  placeholder="Type eg: jerseysize - no.of jersey and press enter..."
                  isClearable
                  isMulti
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Text className="text-center" style={{color:"red"}}>{sizeerror}</Form.Text>
            <Form.Row>
              <Form.Group as={Col} controlId="desciption">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Add Description"
                  name="description"
                  onChange={(e)=>setdiscrption(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Text className="text-center pb-4" style={{color:"red"}}>{descerror}</Form.Text>

            <Button variant="success" type="button" onClick={()=>onsubmit()}>
              Submit
            </Button>
  
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
