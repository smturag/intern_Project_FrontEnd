import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col, Table } from "react-bootstrap";
import "../CSS/formList.css";
import fetch from "cross-fetch";
import FormData from "./FormData";

class FormList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      FormName: [],
      isLoaded: false,
    };
    this.PassData = this.PassData.bind(this);
  }
  PassData(formName) {
    fetch(`http://localhost:4000/api/getHeader/${formName}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/getFormName")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.getFormName);
        this.setState({ FormName: data.getFormName });
      });
  }

  render() {
    return (
      <>
        <Container>
          <Card className="pt-0 m-sm-2">
            <Card.Header>Form List</Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  <Col md={0}>
                    Show
                    <input size="sm" type="number" />
                    entries
                  </Col>
                  <Col md={{ span: 4, offset: 4 }}>
                    Search <input size="sm" type="text" />
                  </Col>
                </Row>
                <Table className="mt-5" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="w-20">SL</th>
                      <th className="w-55">Name</th>
                      <th className="w-25">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      // eslint-disable-next-line
                      this.state.FormName.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <a href="/formData">
                              {" "}
                              <td onClick={this.PassData(v.formName)}>
                                {" "}
                                {v.formName}
                              </td>{" "}
                            </a>
                            <td>
                              <Button
                                onClick={this.submitForm}
                                className="m-2"
                                variant="primary"
                                size="sm"
                              >
                                Reports
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </Table>
              </Container>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default FormList;
