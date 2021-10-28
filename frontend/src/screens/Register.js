import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h2 style={{ color: "#0fafe9", textAlign: "initial" }}>Sign Up</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label style={{ float: "left", margin: "6px 0" }}>
            Name
          </Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label style={{ float: "left", margin: "6px 0" }}>
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label style={{ float: "left", margin: "6px 0" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          style={{ float: "left", margin: "30px 0" }}
          type="submit"
          variant="primary"
        >
          REGISTER AS DEALER
        </Button>
        <Button
          style={{ float: "left", margin: "30px 5px" }}
          type="submit"
          variant="primary"
        >
          REGISTER AS MANUFACTURER
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
