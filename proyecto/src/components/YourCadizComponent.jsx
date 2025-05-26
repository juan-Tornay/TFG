// ...existing imports...
import { fetchProducts } from '../services/content_API';
import React, { useEffect, useState } from 'react';

const YourCadizComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // Filtra los productos con id 50, 51, 52
  const cadizSpecials = products.filter(
    p => [50, 51, 52].includes(p.id)
  );

  return (
    <div>
      <h1 style={{
        color: "white",
        textAlign: "center",
        textShadow: "rgb(0, 195, 255) 0px 0px 60px, rgb(0, 195, 255) 0px 0px 20px, rgb(0, 195, 255) 0px 0px 30px"
      }}>
        CADIZ
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        {cadizSpecials.map(product => (
          <div key={product.id} style={{
            background: "#222",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            width: "250px",
            textAlign: "center"
          }}>
            <img src={product.image.replace('./assets', '/assets')} alt={product.name} style={{ width: "100%", borderRadius: "6px" }} />
            <h2>{product.name}</h2>
            <p>{product.city}</p>
            <p>Entrada: {product.entryPrice}</p>
            <p>Botella: {product.bottlePrice}</p>
            <p>Botella Premium: {product.premiumBottlePrice}</p>
            <p>Dress Code: {product.dressCode}</p>
            <p>Precio: {product.price}</p>
          </div>
        ))}
      </div>
      {/* ...resto del contenido... */}
    </div>
  );
};

export default YourCadizComponent;
