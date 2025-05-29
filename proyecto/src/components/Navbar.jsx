import React, { useState } from 'react';
import { fetchProducts } from './services/content_API';

const discotecaCategorias = [
  { name: 'Rosso', categorias: ['verano', 'reggaeton'] },
  { name: 'UTHOPIA', categorias: ['todo el año'] },
  // ...añade más discotecas y categorías si lo deseas...
];

const categorias = [
  'verano',
  'reggaeton',
  'tecno',
  'breakbeat',
  'todo el año'
];

const Navbar = () => {
  const [showRecomModal, setShowRecomModal] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const handleCategoriaClick = async (cat) => {
    setSelectedCategoria(cat);
    const products = await fetchProducts();
    const filtered = products.filter(
      p =>
        discotecaCategorias.find(
          d => d.name.toLowerCase() === p.name.toLowerCase()
        )?.categorias.includes(cat)
    );
    setRecommendation(filtered.length > 0 ? filtered[0] : null);
  };

  return (
    <>
      {/* ...existing code... */}
      <nav className="navbar">
        {/* ...existing code... */}
        <ul>
          {/* ...existing code... */}
          <li>
            <a
              href="#recomendaciones"
              onClick={e => {
                e.preventDefault();
                setShowRecomModal(true);
                setRecommendation(null);
                setSelectedCategoria('');
              }}
            >
              Recomendaciones
            </a>
          </li>
          {/* ...existing code... */}
        </ul>
      </nav>
      {/* Modal de recomendaciones */}
      {showRecomModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2000
          }}
        >
          <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300 }}>
            <h2>Elige un estilo musical</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              {categorias.map(cat => (
                <button
                  key={cat}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 6,
                    border: selectedCategoria === cat ? '2px solid #00c3ff' : '1px solid #ccc',
                    background: selectedCategoria === cat ? '#e6f7ff' : '#f9f9f9',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCategoriaClick(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <button onClick={() => { setShowRecomModal(false); setRecommendation(null); setSelectedCategoria(''); }}>Cerrar</button>
            {recommendation && (
              <div style={{ marginTop: 16 }}>
                <strong>Te recomendamos:</strong>
                <div>{recommendation.name} ({recommendation.city}) - Entrada: {recommendation.entryPrice}</div>
              </div>
            )}
            {selectedCategoria && !recommendation && (
              <div style={{ marginTop: 16, color: 'red' }}>No se encontró ninguna discoteca con ese estilo.</div>
            )}
          </div>
        </div>
      )}
      {/* ...existing code... */}
    </>
  );
};

export default Navbar;