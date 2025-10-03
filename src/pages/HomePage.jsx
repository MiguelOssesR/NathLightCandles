import React from 'react';
import Marquee from '../components/Marquee';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import AnimatedTitle from '../components/AnimatedTitle';
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
      <Marquee />
      <Header />
      <Hero />
      <AnimatedTitle text="Nuestros Productos" className="products-title" />
      <div class="products-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
