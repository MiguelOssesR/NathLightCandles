import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';

const products = [
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU' },

];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <h2 class="products-title">Nuestros Productos</h2>
      <div class="products-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
