import React from 'react';

const Carrito = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    return sum + (price || 0);
  }, 0);

  const handleSimularCompra = () => {
    alert('¡Compra simulada con éxito!\nProductos comprados:\n' + cartItems.map(p => p.title || p.name).join(', '));
    // Aquí puedes vaciar el carrito si lo deseas
    // localStorage.removeItem('cart');
    // window.location.reload();
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={item.cartId || idx}>
                {item.title || item.name} - {item.price}€
              </li>
            ))}
          </ul>
          <h4>Total: {total}€</h4>
          <button onClick={handleSimularCompra}>Simular compra</button>
        </>
      )}
    </div>
  );
};

export default Carrito;