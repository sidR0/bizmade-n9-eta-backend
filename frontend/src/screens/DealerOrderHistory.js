import React, { useEffect } from "react";
import "../styles.css";
import { Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listMyOrders } from "../actions/orderActions.js";

const DealerOrderHistory = ({ history, match }) => {
  const userId = match.params.id;
  const dispatch = useDispatch();

  // const orderList = useSelector((state) => state.orderList);
  // const { loading, error, orders } = orderList;
  // console.log(orders);

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //const myOrders = orders.map((o) => orders.userId === userInfo._id)

  useEffect(() => {
    if (userInfo) {
      // const user = userInfo._id
      dispatch(listMyOrders(userId));
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      <>
        <h1>{userInfo.name}'s Orders</h1>
        {/* <p>{userInfo._id}</p> */}
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>PRODUCT</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>₹{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      <i
                        className="fas fa-times"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    </div>
  );
};

export default DealerOrderHistory;
