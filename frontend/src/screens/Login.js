import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <h2 style={{ color: "#0fafe9", textAlign: "initial" }}>Sign In</h2>
      <Form onSubmit={submitHandler}>
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

        <Button style={{ margin: "20px 0" }} type="submit" variant="primary">
          SIGN IN
        </Button>
      </Form>

      <Row>
        <Col>
          New User? <Link to="/register">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default Login;
