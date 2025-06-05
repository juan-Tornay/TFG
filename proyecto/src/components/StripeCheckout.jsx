import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51RVxo8R90gNnKZZtuS6BFQnXeAMqdFJ85iyWXzL9aQ6G5KF47HUNBLPP8HCRmoOVqDC16WDo1n3rCvJbcO1V3FKm00uIMl1NvT');

// Formulario de pago
const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const res = await fetch('http://localhost:5000/api/payment/pagar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        currency: 'eur',
        paymentMethodId: paymentMethod.id,
      }),
    });
    const data = await res.json();
    if (data.success) {
      alert('¡Pago realizado con éxito!');
    } else {
      alert(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pagar</button>
    </form>
  );
};

// Componente principal con carrito local y redirección
const StripeCheckout = () => {
  const [cart, setCart] = useState([]);
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate();

  // Ejemplo de productos (puedes adaptar esto a tus datos reales)
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 15 },
  ];

  // Añadir producto al carrito y redirigir al carrito
  const addToCart = (product) => {
    try {
      if (!product) {
        console.error('Error: Producto es undefined o null');
        alert('Error: Producto no válido');
        return;
      }
      const currentCart = JSON.parse(localStorage.getItem('cart')) || cart;
      const newCart = [...currentCart, { ...product, cartId: Date.now() + Math.random() }];
      console.log('Guardando en localStorage:', newCart); // <-- Añade este log
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
      setConfirmation(`Producto "${product.name}" añadido al carrito`);
      navigate('/carrito'); // Asegúrate de que sea '/carrito' en minúsculas
    } catch (err) {
      console.error('Error al añadir al carrito:', err);
      alert('Ocurrió un error al añadir el producto al carrito');
    }
  };

  useEffect(() => {
    console.log('Carrito actualizado:', cart);
    if (cart.length === 0) {
      console.warn('El carrito está vacío');
    }
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div>
      <h3>Productos:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <button type="button" onClick={() => addToCart(product)} style={{ marginLeft: 8 }}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
      {confirmation && (
        <div style={{ color: 'green', marginBottom: 10 }}>{confirmation}</div>
      )}
      <h3>Carrito:</h3>
      <ul>
        {cart.map((item) => (
          <li key={`${item.id}-${item.cartId}`}>{item.name} - {item.price}€</li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div>
          <h4>Total: {total}€</h4>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={total} />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default StripeCheckout;