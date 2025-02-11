import React from 'react';
import '../styles/comparison.css';

const ProductComparison = ({ products }) => {
  return (
    <div className="product-comparison">
      <h2>💃Comparación de Discotecas💃</h2>
      <table>
        <thead>
          <tr>
            <th>Caracteristicas</th>
            {products.map(product => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ciudad 🌆</td>
            {products.map(product => (
              <td key={product.id}>{product.city}</td>
            ))}
          </tr>
          <tr>
            <td> (Entrada + Consumicion 🎟️🍸)</td>
            {products.map(product => (
              <td key={product.id}>{product.entryPrice}</td>
            ))}
          </tr>
          <tr>
            <td>Botella🍾💵</td>
            {products.map(product => (
              <td key={product.id}>{product.bottlePrice}</td>
            ))}
          </tr>
          <tr>
            <td>Botella Premium🍾🍾</td>
            {products.map(product => (
              <td key={product.id}>{product.premiumBottlePrice}</td>
            ))}
          </tr>
          <tr>
            <td>Codigo de Vestimenta</td>
            {products.map(product => (
              <td key={product.id}>{product.dressCode}</td>
            ))}
          </tr>
          <tr>
            <td>Precio de copa🍸💵</td>
            {products.map(product => (
              <td key={product.id}>{product.price}</td>
            ))}
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
