import React, { useEffect, useState } from 'react';

const Carrito = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={`${item.id}-${item.cartId}`}>
                {item.name} - {item.price}€
              </li>
            ))}
          </ul>
          <h4>Total: {total}€</h4>
        </>
      )}
    </div>
  );
};

export default Carrito;
