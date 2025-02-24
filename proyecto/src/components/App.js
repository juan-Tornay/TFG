import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import HeroSection from './Home/HeroSection';
import ContentList from './Home/ContentList';
import Footer from './Layout/Footer';
import './styles/layout.css';
import RegisterForm from './Auth/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import ForgotPasswordForm from './Auth/ForgotPasswordForm';
import Compraas from './Home/Compraas';
import Contacto from './Home/Contacto';
import Cart from './Home/Cart';

const products = [];

const App = () => {
  const [isOfAge, setIsOfAge] = useState(() => {
    const savedAgeVerification = localStorage.getItem('isOfAge');
    return savedAgeVerification ? JSON.parse(savedAgeVerification) : null;
  });
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAgeVerification = (isAdult) => {
    if (isAdult) {
      setIsOfAge(true);
      localStorage.setItem('isOfAge', true);
    } else {
      alert('Debes ser mayor de edad para acceder a este contenido.');
      setIsOfAge(false);
    }
  };

  const toggleMusic = () => {
    setIsMusicOn(!isMusicOn);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  if (isOfAge === null) {
    return (
      <div className="age-verification-modal">
        <div className="age-verification-content">
          <h2>¿Eres mayor de 18 años?</h2>
          <button onClick={() => handleAgeVerification(true)}>Sí</button>
          <button onClick={() => handleAgeVerification(false)}>No</button>
        </div>
      </div>
    );
  }

  if (isOfAge === false) {
    return <div className="age-restriction-message">Debes ser mayor de edad para acceder a este contenido.</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar cartItems={cartItems} />
        <div className="content-container">
          <button onClick={toggleMusic}>
            {isMusicOn ? 'Apagar música' : 'Encender música'}
          </button>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ContentList addToCart={addToCart} />
              </>
            }
          />
          <Route path="/registrar" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/Compra" element={<Compraas products={products} addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;