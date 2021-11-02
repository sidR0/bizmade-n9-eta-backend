import React, { useState, useEffect } from "react";
import "../styles.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";

const ManufacLandingPage = ({ products, manufacturer }) => {
  const [inventory, setInventory] = useState(false);

  // useEffect(() => {
  //   products.map((product) => {
  //     if (product.manufacturer === manufacturer) {
  //       setInventory(true);
  //     }
  //   });
  //   if (inventory) {
  //     console.log(`Inventory : ${inventory}`);
  //   } else {
  //     return <h2>No products in your Inventory</h2>;
  //   }
  // });
  return (
    <div>
      <Container>
        {/* {loading ? (
          <Col className="col-10">
            <h2>Loading...</h2>
          </Col>
        ) : error ? (
          <Col className="col-10">
            <h3>{error}</h3>
          </Col>
        ) : ( */}
        <Row>
          <Col md={12} className="p-4">
            <h2 className="float-start">{`Welcome ${manufacturer}`}</h2>
            <Link to="/addproduct">
              <Button className="float-end">ADD PRODUCT</Button>
            </Link>
          </Col>
          {products.map((product) =>
            product.manufacturer === manufacturer ? (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Card className="my-3 p-3 rounded">
                  <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" />
                  </Link>

                  <Card.Body className="text-left">
                    <Link to={`/product/${product._id}`}>
                      <Card.Title as="div">
                        <strong>{product.name}</strong>
                      </Card.Title>
                    </Link>

                    <Card.Text
                      style={{
                        color: "#0fafe9",
                        fontSize: "medium",
                        fontWeight: "500",
                      }}
                      as="h3"
                    >
                      &#8377;{product.price}
                    </Card.Text>
                    <Link to={`/editproduct/${product._id}`}>
                      <Button className="bg-blue">EDIT</Button>
                    </Link>
                    <Button className="bg-blue">DELETE</Button>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              <></>
            )
          )}
        </Row>
        {/* )} */}
        {/* <Col md={12} className="p-4">
                        <h2 className="float-start">Welcome Nike India</h2>
                        <Button className="float-end">ADD PRODUCT</Button>
                    </Col>
                    <Col className="p-4">
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
      </Container>
    </div>
  );
};

export default ManufacLandingPage;
