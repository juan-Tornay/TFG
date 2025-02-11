import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './components/styles/layout.css';
import { fetchProducts } from './components/services/content_API';

fetchProducts().then(products => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App products={products} />);
});