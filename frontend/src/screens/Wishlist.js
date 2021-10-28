import React from "react";
import cartItems from "../cartItems";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";

function Wishlist() {
  return (
    <Row>
      <Col md={12}>
        <h2 style={{ textAlign: "left", marginBottom: "30px" }}>Wishlist</h2>
        {cartItems.length === 0 ? (
          <>
            <h3>Your cart is empty </h3>
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
          </>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>&#8377;{item.price}</Col>
                  <Col md={1}>
                    <Form.Control as="select" value={item.qty}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="primary">
                      {/* <i className="fas fa-trash"></i> */}
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="primary">
                      {/* <i className="fas fa-trash"></i> */}
                      DELETE
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

export default Wishlist;
