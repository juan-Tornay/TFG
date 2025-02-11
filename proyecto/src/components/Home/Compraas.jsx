import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/compra.css'; // Import the CSS file for styling

const Compraas = ({ products }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product) {
      // Perform any necessary actions with the form data here
      navigate('/'); // Redirect to the homepage
    } else {
      alert('No product selected');
    }
  };

  return (
    <div className="compraas-form">
      <h2>Comprar Entrada o Botella para {product ? product.name : 'Producto'}</h2>
      {product ? (
        <div>
          
         
        </div>
      ) : (
        <p>No product selected</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        <label htmlFor="type">Tipo:</label>
        <select id="type" name="type" required>
          <option value="reservado">Reservado</option>
          <option value="reservado_premium">Reservado Premium</option>
          <option value="entrada_normal">Entrada Normal</option>
        </select><br /><br />
        <input type="submit" value="Comprar" />
      </form>
    </div>
  );
};

export default Compraas;