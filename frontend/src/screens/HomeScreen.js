import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import "./HomeScreen.css";
import axios from "axios";
import products from "../products";
import ProductCarousel from "../components/ProductCarousel";


import { useDispatch, useSelector } from 'react-redux'
import { listDataCreator } from '../actions/combinedActions.js'

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchedProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchedProducts();
  // }, []);

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const userList = useSelector((state) => state.userList)

  useEffect(() => {
    dispatch(listDataCreator('products')())
    dispatch(listDataCreator('users')())
  }, [dispatch])

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
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
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
