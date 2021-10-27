import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import CreateForm from "./CreateForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormList from "./FormList";
import FormData from './FormData'


class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Form Builder</Navbar.Brand>
              <Nav className="ml-auto float-right">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/createForm">Generate Form</Nav.Link>
                <Nav.Link href="/formList">Form List</Nav.Link>
                <Nav.Link href="/formData">Form Data</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/createForm">
              <CreateForm />
            </Route>
            <Route path="/formList">
              <FormList />
            </Route>
            <Route path="/formData">
              <FormData />
            </Route>
          </Switch>
        </>
      </Router>
    );
  }
}
export default Main;
