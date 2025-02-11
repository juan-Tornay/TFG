import React from 'react';
import '../styles/content.css';

const ContentCard = ({ product, onSelectProduct }) => {
  return (
    <div className="content-card">
      <input 
        type="checkbox" 
        onChange={() => onSelectProduct(product)} 
      />
      <img src={product.image} alt={product.name} className="content-card-image" />
      <h2 className="content-card-title">{product.name}</h2>
      {/* Remove the price from the content card */}
    </div>
  );
};

export default ContentCard;