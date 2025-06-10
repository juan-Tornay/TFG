import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import HeroSection from './Home/HeroSection';
import ContentList from './Home/ContentList';
import Footer from './Layout/Footer';
import './styles/layout.css';
import RegisterForm from './Auth/RegisterForm';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import ForgotPasswordForm from './Auth/ForgotPasswordForm';
import Compraas from './Home/Compraas';
import Contacto from './Home/Contacto';
import Cart from './Home/Cart';
import Fototeca from './Home/Fototeca';

const products = [];

const App = () => {
  const [isOfAge, setIsOfAge] = useState(() => {
    const savedAgeVerification = localStorage.getItem('isOfAge');
    return savedAgeVerification ? JSON.parse(savedAgeVerification) : null;
  });
  const [isMusicOn, setIsMusicOn] = useState(false);

  // Estado global del carrito, inicializado desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Guarda el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCartItems(prev => [...prev, { ...product, cartId: Date.now() + Math.random() }]);
  };

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

  const FototecaButton = () => {
    const navigate = useNavigate();
    return <button onClick={() => navigate('/Fototeca')}>Ir a Fototeca</button>;
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
          <FototecaButton />
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
          <Route path="/Fototeca" element={<Fototeca />} />
          <Route path="/contacto" element={<Contacto />} />
      <Route path="/carrito" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;