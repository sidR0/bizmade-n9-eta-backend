import React from "react";
import "../styles.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <Container>
        <h2 className="p-4">Add Product</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">Name</Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">Price</Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Description
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Quantity
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Category
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={1} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="float-start fw-bold">Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>
          <Link to="/">
            <Button variant="primary" type="submit" className="m-4">
              Save Changes
            </Button>
          </Link>
          <Link to="/">
            <Button variant="primary" type="submit" className="m-4">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
