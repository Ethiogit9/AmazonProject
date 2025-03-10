// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Order from "./pages/Orders/Order";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Result/Result";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:CategoryName" element={<Result />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routing;
