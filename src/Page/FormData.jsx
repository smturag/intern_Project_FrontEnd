import React, { Component } from "react";
import { Card, Button,Form } from "react-bootstrap";


class FormData extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
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
            </Form>
            
          </Card.Body>
        </Card>
      </>
    );
  }
}
 export default FormData
