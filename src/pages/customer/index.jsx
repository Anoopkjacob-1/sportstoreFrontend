import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import {Customeroute} from  '../../Routes/CustomerRoutes'
import NOTFOUND from '../../componenets/404'

import PROFILE from "../../componenets/profile";
import HOME from "./home/home"

import NAVBAR from "./navbar/navbar";
import SIDEBAR from "./sidebar/sidebar";
import CART from "./cart/cart";


export default function Index() {
  const [menubar, setmenubar] = useState(false);
  return (
    <div>
      <NAVBAR setmenubar={setmenubar} menubar={menubar} />
      <Container fluid className="mt-0">
        <Row className="mt-0 p-0">
          {menubar ? (
            <Col xs={1} className="p-0" style={{backgroundColor: "rgb(134, 197, 230)"}}>
              <SIDEBAR />
            </Col>
          ) : (
            ""
          )}
          <Col>
            <Router>
              <Switch>
                <Customeroute exact path="/sportsstore" component={HOME} />
                <Customeroute exact path="/sportsstore/profile" component={PROFILE} />
                <Customeroute exact path="/sportsstore/cart" component={CART} />
                <Customeroute path="*" component={NOTFOUND} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


