import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacto from './components/Home/Contacto';
import SobreNosotros from './components/Home/SobreNosotros';
import Navbar from './components/Layout/Navbar';
import ContentList from './components/Home/ContentList';
import Carrito from './components/Home/Carrito';

function App() {
  // Estado global del carrito
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    setCartItems(prev => [...prev, { ...product, cartId: Date.now() + Math.random() }]);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Switch>
        <Route path="/sobre-nosotros" component={SobreNosotros} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/carrito">
          <Carrito cartItems={cartItems} />
        </Route>
        <Route path="/">
          <ContentList addToCart={addToCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;