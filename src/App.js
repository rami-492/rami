import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirmation from './pages/OrderConfirmation';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/confirmorder" element={<OrderConfirmation />} />
        
      </Routes>
    </div>
  );
}

export default App;