const products = [
  {
     id: 1,
    name: 'ROSSO BY ANTHIQUE',
    city: 'Sevilla',
    entryPrice: '10 euros',
    bottlePrice: '120 euros',
    premiumBottlePrice: '180 euros',
    dressCode: 'Sí',
    price: '10 euros',
    image: './assets/content/rossobyantique.jpg',
    likes: 10,
    rating: 0
  },
  {
    id: 2,
    name: 'OCCO',
    city: 'Sevilla',
    entryPrice: '15 euros',
    bottlePrice: '120 euros',
    premiumBottlePrice: '180 euros',
    dressCode: 'Sí',
    price: '9 euros',
    image: './assets/content/occo.jpg',
    likes: 0,
    rating: 0
  },
  {
    id: 3,
    name: 'PHIPHI',
    city: 'Puerto Sherry (Cadiz)',
    entryPrice: '20 euros',
    bottlePrice: '140 euros',
    premiumBottlePrice: '220 euros',
    dressCode: 'Sí',
    price: '9 euros',
    image: './assets/content/phiphi.jpg',
    likes: 0,
    rating: 0
  },
  {
    id: 4,
    name: 'UTHOPIA',
    city: 'Sevilla',
    entryPrice: '12 euros',
    bottlePrice: '100 euros',
    premiumBottlePrice: '140 euros',
    dressCode: 'No',
    price: '7 euros',
    image: './assets/content/uthopia.jpg',
    likes: 0,
    rating: 0
  },
  {
    id: 5,
    name: 'ABRIL',
    city: 'Sevilla',
    entryPrice: '15 euros',
    bottlePrice: '120 euros',
    premiumBottlePrice: '160 euros',
    dressCode: 'Sí',
    price: '9 euros',
    image: './assets/content/abril.jpg',
    likes: 0,
    rating: 0
  },
  {
    id: 6,
    name: 'Playa Aruba',
    city: 'Torremolinos (Malaga)',
    entryPrice: '20 euros',
    bottlePrice: '140 euros',
    premiumBottlePrice: '220 euros',
    dressCode: 'Sí',
    price: '10 euros',
    image: './assets/content/Aruba.jpg',
    likes: 6,
    rating: 0
  },
  {
    id: 7,
    name: 'Margarita Puerto Sherry',
    city: 'El Puerto de Santa María (Cádiz)',
    entryPrice: '18 euros',
    bottlePrice: '150 euros',
    premiumBottlePrice: '200 euros',
    dressCode: 'Sí',
    price: '12 euros',
    image: './assets/content/jcreyes2.gif',
    likes: 0,
    rating: 0
  }
  // Add more products as needed
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simula un retraso de 1 segundo
  });
};

export const likeProduct = (productId) => {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.likes += 1;
  }
  return product;
};

export const dislikeProduct = (productId) => {
  const product = products.find(p => p.id === productId);
  if (product && product.likes > 0) {
    product.likes -= 1;
  }
  return product;
};

export const voteProduct = (productId, rating) => {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.rating = rating;
  }
  return product;
};

export const getTopRatedProducts = () => {
  return products.sort((a, b) => b.rating - a.rating);
};

export const getProductSummary = (productId) => {
  const product = products.find(p => p.id === productId);
  if (product) {
    return `${product.name} in ${product.city} with entry price of ${product.entryPrice}`;
  }
  return null;
};