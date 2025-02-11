import React from 'react';
import ContentList from './ContentList';

const App = ({ products }) => {
  return (
    <div className="app">
      <h1>Product List</h1>
      <ContentList products={products} />
    </div>
  );
};

export default App;
