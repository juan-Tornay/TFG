import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems }) => {
  // Lógica para iniciar Stripe Checkout
  const handleCheckout = async () => {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Error iniciando el pago');
    }
  };//sdvsds
//rgwrgwg
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id || item.title || ''}-${index}`}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="confirm-purchase-button" onClick={handleCheckout} disabled={cartItems.length === 0}>
        Comprar
      </button>
    </div>
  );
};

export default Cart;
