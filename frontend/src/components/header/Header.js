import React from "react";
import "./Header.css";
// import { LinkContainer } from "react-router-bootstrap";
// import Cart from "./images/shopping-cart.png";
// import Heart from "./images/heart.png";
// import Profile from "./images/user.png";
// import { Nav } from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Search from "../Search";

function Header() {
  return (
    // <div>
    //   <header>
    //     <LinkContainer to="/">
    //       <div className="logo">
    //         <h1>BizMade</h1>
    //       </div>
    //     </LinkContainer>
    //     <nav>
    //       <ul className="nav-links">
    //         <li>
    //           <LinkContainer to="/wishlist">
    //             <Nav.Link>
    //               {/* <img src={Heart} alt="wishlist" /> */}
    //               <i className="far fa-heart"></i>
    //               Wishlist
    //             </Nav.Link>
    //           </LinkContainer>
    //         </li>
    //         <li>
    //           <LinkContainer to="/cart">
    //             <Nav.Link>
    //               {" "}
    //               {/* <img src={Cart} alt="cart" /> */}
    //               <i className="fas fa-shopping-cart"></i>
    //               Cart
    //             </Nav.Link>
    //           </LinkContainer>
    //         </li>
    //         <li>
    //           <LinkContainer to="/profile">
    //             <Nav.Link>
    //               {/* <img src={Profile} alt="profile" /> */}
    //               <i className="far fa-user"></i>
    //               Profile
    //             </Nav.Link>
    //           </LinkContainer>
    //         </li>
    //       </ul>
    //     </nav>
    //     <LinkContainer to="/login">
    //       <Nav.Link className="auth-btn">
    //         <button>Sign Up / Log In</button>
    //       </Nav.Link>
    //     </LinkContainer>
    //   </header>
    // </div>
    <header>
      <Navbar bg="white" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h1>BizMade</h1>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Search />
            <Nav className="nav-links">
              <LinkContainer to="/wishlist">
                <Nav.Link>
                  <i className="far fa-heart"></i> Wishlist
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              <NavDropdown
                title={
                  <span>
                    <i className="far fa-user"></i>
                  </span>
                }
                id="adminmenu"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/dealer/orders">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : ( */}
              <LinkContainer to="/login">
                <Nav.Link className="auth-btn">
                  <button>Sign Up / Log In</button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
