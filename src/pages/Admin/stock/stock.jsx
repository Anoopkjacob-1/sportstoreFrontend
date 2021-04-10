import React from 'react';
import { Table,Container,Row} from "react-bootstrap";
import AdminNavbar from '../../../componenets/AdminNavbar'



import '../stock/stock.css'

export default function stock() {
    return (
        <div>
<AdminNavbar/>
<Container>
<Row  className="row">
  <h1>PRODUCT STOCK</h1>
<Table striped bordered hover className="table" >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Row>
</Container>
  
        </div>
    )
}
