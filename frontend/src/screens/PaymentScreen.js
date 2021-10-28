import Button from "@restart/ui/esm/Button";
import React from "react";
import "../styles.css";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentScreen = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <p className="fw-bold">Billing Address</p>
            <form>
              <input
                className="firstname col-md-12 m-1"
                placeholder="First Name"
              ></input>
              <input
                className="lastname col-md-12 m-1"
                placeholder="Last Name"
              ></input>
              <input
                className="country col-md-12 m-1"
                placeholder="Country"
              ></input>
              <input
                className="streetaddress col-md-12 m-1"
                placeholder="Street Address"
              ></input>
              <input className="town col-md-12 m-1" placeholder="Town"></input>
              <input
                className="state col-md-12 m-1"
                placeholder="State"
              ></input>
              <input
                className="postalcode col-md-12 m-1"
                placeholder="Postal Code"
              ></input>
              <input
                className="phone col-md-12 m-1"
                placeholder="Phone"
              ></input>
              <input
                className="email col-md-12 m-1"
                placeholder="Email Address"
              ></input>
            </form>
          </Col>
          <Col md={6}>
            <p className="fw-bold">Your Orders</p>
            <Table className="table-bordered">
              <tbody>
                <tr className="no-border p-5">
                  <td>
                    <Image src="" />
                    Cooking Oil
                  </td>
                  <td>Qty:</td>
                </tr>
                <tr className="p-5">
                  <td>
                    <Image src="" />
                    Whole Wheat
                  </td>
                  <td>Qty:</td>
                </tr>
                <tr className="p-5">
                  <td>
                    <Image src="" />
                    Corn Flakes
                  </td>
                  <td>Qty:</td>
                </tr>
                <tr className="bg-lightblue p-5">
                  <td>Total</td>
                  <td className="fw-bold">5,590</td>
                </tr>
                <tr className="bg-lightblue p-5">
                  <td colspan="2">
                    <Link to="/orderconfirmation">
                      <Button variant="primary">Place Order</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentScreen;
