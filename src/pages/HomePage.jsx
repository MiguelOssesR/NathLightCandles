import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import './HomePage.css';

const products = [
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Lavanda' },
  { name: 'Vela de Vainilla', price: '$15.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Vainilla' },
  { name: 'Vela de Sándalo', price: '$18.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Sándalo' },
  { name: 'Vela de Rosas', price: '$16.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Rosas' },
  { name: 'Vela de Rosas', price: '$16.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Rosas' },
  { name: 'Vela de Rosas', price: '$16.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Rosas' },
  { name: 'Vela de Rosas', price: '$16.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Rosas' },
  { name: 'Vela de Rosas', price: '$16.00', image: 'https://via.placeholder.com/250x250.png/E8E8E8/333333?text=Rosas' },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <h2 className="products-title">Nuestros Productos</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
