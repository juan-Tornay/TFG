import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCard from './ContentCard';
import { fetchProducts, likeProduct, dislikeProduct, voteProduct, getTopRatedProducts, getProductSummary } from '../services/content_API';
import ProductComparison from './ProductComparison'; // Import the ProductComparison component
import Compraas from './Compraas'; // Import the Compraas component
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer
import '../styles/content.css';

const ContentList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // State for selected products
  const [mostLikedProducts, setMostLikedProducts] = useState([]);
  const [productSummary, setProductSummary] = useState(null);
  const [flippedProductId, setFlippedProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setMostLikedProducts(data.sort((a, b) => b.likes - a.likes));
    });
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProducts(prevSelected => {
      if (prevSelected.includes(product)) {
        return prevSelected.filter(p => p !== product);
      } else if (prevSelected.length < 3) { // Limit to 3 products
        return [...prevSelected, product];
      } else {
        return [...prevSelected.slice(1), product]; // Remove the first product and add the new one
      }
    });
    const summary = getProductSummary(product.id);
    setProductSummary(summary);
    setFlippedProductId(product.id);
  };

  const handleCloseCard = (event) => {
    event.stopPropagation(); // Prevent triggering the card flip
    setFlippedProductId(null);
  };

  const handleLikeProduct = (productId) => {
    const updatedProduct = likeProduct(productId);
    setProducts(products.map(p => p.id === productId ? updatedProduct : p));
    setMostLikedProducts(products.map(p => p.id === productId ? updatedProduct : p).sort((a, b) => b.likes - a.likes));
  };

  const handleDislikeProduct = (productId) => {
    const updatedProduct = dislikeProduct(productId);
    setProducts(products.map(p => p.id === productId ? updatedProduct : p));
    setMostLikedProducts(products.sort((a, b) => b.likes - a.likes));
  };

  const handleVoteProduct = (productId, rating) => {
    const updatedProduct = voteProduct(productId, rating);
    setProducts(products.map(p => p.id === productId ? updatedProduct : p));
  };

  const handleAboutClick = (product) => {
    navigate('/Compra', { state: { product } });
  };

  const handleAddToCart = (product, event) => {
    event.stopPropagation(); // Prevent triggering the card flip
    addToCart(product);
    navigate('/carrito');
  };

  return (
    <>
      <section className="content-list">
        {products.map(product => (
          <div 
            key={product.id} 
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
                <button onClick={(e) => { e.stopPropagation(); handleLikeProduct(product.id); }}>Like</button> {/* Prevent affecting comparison table */}
                <button onClick={(e) => { e.stopPropagation(); handleAboutClick(product); }}>Acerca de</button>
                <button onClick={(e) => handleAddToCart(product, e)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {productSummary && (
        <div className="product-summary">
          <p>{productSummary}</p>
        </div>
      )}
      {selectedProducts.length > 1 && (
        <ProductComparison products={selectedProducts} /> // Render ProductComparison if more than one product is selected
      )}
      <h2 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 10px #00c3ff, 0 0 20px #00c3ff, 0 0 30px #00c3ff' }}>
        Discotecas Más Populares
      </h2> {/* Center the text and add neon blue shadow */}
      <section className="most-liked-products">
        <div className="most-liked-products-row">
          {mostLikedProducts.map(product => (
            <ContentCard 
              key={product.id} 
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