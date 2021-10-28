import React from "react";
import "../styles.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <Container>
        <h2 className="p-4">Account Details</h2>
        <Form>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  First Name
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Last Name
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Display Name
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Email Address
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Phone Number
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Button variant="primary" type="submit" className="m-4">
                Save Changes
              </Button>
            </Col>
            <h2 className="p-4">Change Password</h2>
            <Col md={6}>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  New Password
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={2} />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="float-start fw-bold">
                  Confirm New Password
                </Form.Label>
                <Form.Control as="textarea" rows={1} cols={1} />
              </Form.Group>
              <Link to="/">
                <Button variant="primary" type="submit" className="m-4">
                  SAVE CHANGES
                </Button>
              </Link>
              <Link to="/">
                <Button variant="primary" type="submit" className="m-4">
                  CANCEL
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ProfilePage;
