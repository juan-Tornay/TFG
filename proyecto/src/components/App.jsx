import React from 'react';
import ContentList from './ContentList';

const App = ({ products }) => {
  // Filtra productos de Cádiz con id 50, 51, 52
  const specialCadiz = products.filter(p => [50, 51, 52].includes(p.id));
  // El resto de productos (no Cádiz o no esos ids)
  const otherProducts = products.filter(p => ![50, 51, 52].includes(p.id) && p.city !== 'Cadiz');
  // Otros productos de Cádiz (si quieres mostrar también el resto de Cádiz)
  const otherCadiz = products.filter(p => p.city === 'Cadiz' && ![50, 51, 52].includes(p.id));

  return (
    <div className="app">
      <h1>Product List</h1>
      <ContentList products={otherProducts} />

      <h1 style={{
        color: "white",
        textAlign: "center",
        textShadow: "rgb(0, 195, 255) 0px 0px 60px, rgb(0, 195, 255) 0px 0px 20px, rgb(0, 195, 255) 0px 0px 30px"
      }}>
        CADIZ
      </h1>
      {/* Si quieres mostrar el resto de Cádiz, puedes poner aquí <ContentList products={otherCadiz} /> */}
      <ContentList products={specialCadiz} />
    </div>
  );
};

export default App;
