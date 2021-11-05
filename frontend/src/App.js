import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProductScreen from "./screens/ProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderConfirmation from "./screens/OrderConfirmation";
import DealerOrderHistory from "./screens/DealerOrderHistory";
import ManufacOrderHistory from "./screens/ManufacOrderHistory";
import EditProduct from "./screens/EditProduct";
import AddProduct from "./screens/AddProduct";
import ProfilePage from "./screens/ProfilePage";
import ManufacLandingPage from "./screens/ManufacLandingPage";
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/orderconfirmation" component={OrderConfirmation} />
            <Route path="/dealer/orders" component={DealerOrderHistory} />
            <Route
              path="/manufacturer/orders"
              component={ManufacOrderHistory}
            />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/home" component={ManufacLandingPage} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
