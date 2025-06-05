import React from 'react';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './components/Carrito';
import StripeCheckout from './components/StripeCheckout';

function MainApp() {
  return (
    <Router>
      <App />
      <Routes>
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<StripeCheckout />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
