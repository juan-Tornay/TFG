import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCard from './ContentCard';
import { fetchProducts, likeProduct, dislikeProduct, voteProduct } from '../services/content_API';
import '../styles/content.css';

const ContentList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [mostLikedProducts, setMostLikedProducts] = useState([]);
  const [flippedProductId, setFlippedProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setMostLikedProducts(data.sort((a, b) => b.likes - a.likes));
    });
  }, []);

  // Funciones mínimas para evitar errores
  const handleSelectProduct = (product) => setFlippedProductId(product.id);
  const handleLikeProduct = (id) => {};
  const handleDislikeProduct = (id) => {};
  const handleVoteProduct = (id) => {};
  const handleCloseCard = (e) => { e.stopPropagation(); setFlippedProductId(null); };
  const handleAboutClick = (product) => {};
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    navigate('/carrito'); // Redirige al carrito tras añadir
  };

  return (
    <>
      <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 60px #00c3ff, 0 0 20px #00c3ff, 0 0 30px #00c3ff' }}>
        SEVILLA
      </h1>
      <section className="content-list">
        {products
          .filter(product => product.city.trim().toLowerCase() === 'sevilla')
          .map(product => (
            <div
              key={`sevilla-${product.id}`}
              className={`content-card ${flippedProductId === product.id ? 'flipped' : ''}`}
              onClick={() => handleSelectProduct(product)}
            >
              <div className="content-card-inner">
                <div className="content-card-front">
                  <ContentCard
                    product={product}
                    onSelectProduct={handleSelectProduct}
                    onLikeProduct={handleLikeProduct}
                    onDislikeProduct={handleDislikeProduct}
                    onVoteProduct={handleVoteProduct}
                  />
                </div>
                <div className="content-card-back">
                  <button className="close-button" onClick={handleCloseCard}>X</button>
                  <p>Hola</p>
                  <button onClick={(e) => { e.stopPropagation(); handleLikeProduct(product.id); }}>Like</button>
                  <button onClick={(e) => { e.stopPropagation(); handleAboutClick(product); }}>Acerca de</button>
                  <button onClick={(e) => handleAddToCart(product, e)}>Añadir al carrito</button>
                </div>
              </div>
            </div>
        ))}
      </section>

      <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 60px #00c3ff, 0 0 20px #00c3ff, 0 0 30px #00c3ff' }}>
        CADIZ
      </h1>
      <section className="content-list">
        {products
          .filter(product => product.city.trim().toLowerCase() === 'cadiz')
          .map(product => (
            <div
              key={`cadiz-${product.id}`}
              className={`content-card ${flippedProductId === product.id ? 'flipped' : ''}`}
              onClick={() => handleSelectProduct(product)}
            >
              <div className="content-card-inner">
                <div className="content-card-front">
                  <ContentCard
                    product={product}
                    onSelectProduct={handleSelectProduct}
                    onLikeProduct={handleLikeProduct}
                    onDislikeProduct={handleDislikeProduct}
                    onVoteProduct={handleVoteProduct}
                  />
                </div>
                <div className="content-card-back">
                  <button className="close-button" onClick={handleCloseCard}>X</button>
                  
                 
                  
                  <button onClick={(e) => handleAddToCart(product, e)}>Añadir al carrito</button>
                </div>
              </div>
            </div>
        ))}
      </section>

      <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 60px #00c3ff, 0 0 20px #00c3ff, 0 0 30px #00c3ff' }}>
        MALAGA
      </h1>
      <section className="content-list">
        {products
          .filter(product => product.city.trim().toLowerCase() === 'malaga')
          .map(product => (
            <div
              key={`malaga-${product.id}`}
              className={`content-card ${flippedProductId === product.id ? 'flipped' : ''}`}
              onClick={() => handleSelectProduct(product)}
            >
              <div className="content-card-inner">
                <div className="content-card-front">
                  <ContentCard
                    product={product}
                    onSelectProduct={handleSelectProduct}
                    onLikeProduct={handleLikeProduct}
                    onDislikeProduct={handleDislikeProduct}
                    onVoteProduct={handleVoteProduct}
                  />
                </div>
                <div className="content-card-back">
                  <button className="close-button" onClick={handleCloseCard}>X</button>
                  <p>Hola</p>
                  <button onClick={(e) => { e.stopPropagation(); handleLikeProduct(product.id); }}>Like</button>
                  <button onClick={(e) => { e.stopPropagation(); handleAboutClick(product); }}>Acerca de</button>
                  <button onClick={(e) => handleAddToCart(product, e)}>Añadir al carrito</button>
                </div>
              </div>
            </div>
        ))}
      </section>

      <h2 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 10px #00c3ff, 0 0 20px #00c3ff, 0 0 30px #00c3ff' }}>
        Discotecas Más Populares
      </h2>
      <section className="most-liked-products">
        <div className="most-liked-products-row">
          {mostLikedProducts.map(product => (
            <ContentCard
              key={`mostliked-${product.id}`}
              product={product}
              onSelectProduct={handleSelectProduct}
              onLikeProduct={handleLikeProduct}
              onDislikeProduct={handleDislikeProduct}
              onVoteProduct={handleVoteProduct}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContentList;