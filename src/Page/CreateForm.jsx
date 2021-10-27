/* eslint-disable no-cond-assign */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import fetch from "cross-fetch";
import FormList from "./FormList";

class GenerateForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      text1: false,
      number1: false,
      date1: false,
      textArea1: false,

      //Input State

      formName: "",
      areaName: "",
      dateName: "",
      numberName: "",
      text: "",
    };
    this.textfield = this.textfield.bind(this);
    this.numberedField = this.numberedField.bind(this);
    this.dateField = this.dateField.bind(this);
    this.textAreaField = this.textAreaField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  textfield() {
    this.state.text1 === false
      ? this.setState({ text1: true })
      : this.setState({ text1: false });
  }
  numberedField() {
    this.state.number1 === false
      ? this.setState({ number1: true })
      : this.setState({ number1: false });
  }
  dateField() {
    this.state.date1 === false
      ? this.setState({ date1: true })
      : this.setState({ date1: false });
  }
  textAreaField() {
    this.state.textArea1 === false
      ? this.setState({ textArea1: true })
      : this.setState({ textArea1: false });
  }
  submitForm() {
    let dataBody = {
      formName: this.state.formName,
      formField: {
        Text: this.state.text,
        Number: this.state.numberName,
        Date: this.state.dateName,
        TextArea: this.state.areaName,
      },
    };
    console.log(dataBody);
    return fetch("http://localhost:4000/api/insert", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <>
        <Container>
          {this.state.text1}
          <Row>
            <Col md={4} className="mt-30">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Form Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.formName}
                    onChange={(e) =>
                      this.setState({ formName: e.target.value })
                    }
                  />
                </Form.Group>
                {this.state.text1 ? (
                  <div className="firstText">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Text</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.text}
                        onChange={(e) =>
                          this.setState({ text: e.target.value })
                        }
                      />
                    </Form.Group>
                  </div>
                ) : null}
                {this.state.number1 ? (
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.numberName}
                        onChange={(e) =>
                          this.setState({ numberName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </div>
                ) : null}
                {this.state.date1 ? (
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.dateName}
                        onChange={(e) =>
                          this.setState({ dateName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </div>
                ) : null}
                {this.state.textArea1 ? (
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Text Area</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.areaName}
                        onChange={(e) =>
                          this.setState({ areaName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </div>
                ) : null}
              </Form>

              <Router>
                <Button
                  onClick={this.submitForm}
                  href="/formList"
                  className="m-2"
                  variant="primary"
                  size="sm"
                >
                  Generate
                </Button>
                <Switch>
                  <Route path="/formList">
                    <FormList />
                  </Route>
                </Switch>
              </Router>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                onClick={this.textfield}
                className="m-2"
                variant="primary"
                size="sm"
              >
                Text
              </Button>
              <br />
              <Button
                onClick={this.numberedField}
                className="m-2"
                variant="primary"
                size="sm"
              >
                Number
              </Button>
              <br />
              <Button
                onClick={this.dateField}
                className="m-2"
                variant="primary"
                size="sm"
              >
                Date
              </Button>
              <br />
              <Button
                onClick={this.textAreaField}
                className="m-2"
                variant="primary"
                size="sm"
              >
                Text Area
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default GenerateForm;
