import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import "./HomeScreen.css";
import axios from "axios";
import products from "../products";
import ProductCarousel from "../components/ProductCarousel";

import { useDispatch, useSelector } from "react-redux";
import { listDataCreator } from "../actions/combinedActions.js";

import { listProducts } from "../actions/productActions";
import { listUsers } from "../actions/userActions";

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchedProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchedProducts();
  // }, []);

  // const products = []
  // const loading = true
  // const error = null

  const dispatch = useDispatch();

  const productList = useSelector((state) => {
    console.log(JSON.stringify(state));
    return state.productList;
  });

  const { loading, products, error } = productList;

  const userList = useSelector((state) => state.userList);

  // useEffect(() => {
  //   dispatch(listDataCreator('api/products', 'products')())
  //   dispatch(listDataCreator('api/users', 'users')())
  // }, [dispatch])

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <ProductCarousel />
      <Row>
        <Col>
          <div id="homepage-container">
            <div className="carousal"></div>
            <div className="products-list"></div>
            <div className="filter">
              <div className="header">Browse Categories</div>
              <div className="all">All</div>
              <div className="clothes">Clothes</div>
              <div className="medicines">Medicines</div>
              <div className="grocery">Grocery</div>
              <div className="shoes">Shoes</div>
              <div className="phone">Phones</div>
              <div className="tyres">Tyres</div>
            </div>
          </div>
        </Col>
        {loading ? (
          <Col className="col-10">
            <h2>Loading...</h2>
          </Col>
        ) : error ? (
          <Col className="col-10">
            <h3>{error}</h3>
          </Col>
        ) : (
          //can give error boundary here becuase product_list_fail is called after 'product is not defined' error is thrown (when case:PRODUCT_LIST_SUCCESS is returning wrong values),
          //so product is assigned with empty array after that when code in product reducer case:PRODUCT_LIST_FAIL is runs
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Row>
    </>
  );
}

export default HomeScreen;
