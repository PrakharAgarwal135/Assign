import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="app">
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default App;
