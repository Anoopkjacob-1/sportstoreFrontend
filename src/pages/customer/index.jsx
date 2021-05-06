import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

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
                <Route exact path="/sportsstore/profile" component={PROFILE} />
                <Route exact path="/sportsstore/cart" component={CART} />
                <Route exact path="/sportsstore" component={HOME} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
