import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const handleBuy = () => {
    // Aquí puedes hacer una petición a tu backend si tienes uno.
    // Por ahora, simulamos la compra:
    alert('¡Compra realizada con éxito!');
    setCartItems([]); // Vacía el carrito en el estado
    localStorage.removeItem('cart'); // Limpia el carrito en localStorage
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
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
      {cartItems.length > 0 && (
        <button className="confirm-purchase-button" onClick={handleBuy}>
          Comprar
        </button>
      )}
    </div>
  );
};

export default Cart;
