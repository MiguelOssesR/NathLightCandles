import React from 'react';
import Marquee from '../components/Marquee';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import AnimatedTitle from '../components/AnimatedTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialCard from '../components/TestimonialCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';

const products = [
  { name: 'Vela de Lavanda', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Relajante vela de lavanda, perfecta para un ambiente de tranquilidad.' },
  { name: 'Vela de Vainilla', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Dulce aroma de vainilla para endulzar tus momentos.' },
  { name: 'Vela de Canela', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Cálido y especiado aroma a canela, ideal para el invierno.' },
  { name: 'Vela de Sándalo', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Aroma amaderado y exótico para una atmósfera sofisticada.' },
  { name: 'Vela de Rosas', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Clásico y romántico aroma a rosas frescas.' },
  { name: 'Vela de Jazmín', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Intenso y floral aroma a jazmín, ideal para las noches de verano.' },
  { name: 'Vela de Coco', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Exótico y dulce aroma a coco, para un ambiente tropical.' },
  { name: 'Vela de Eucalipto', price: '$15.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ohv9ivpVHOaE4_0r3VrTr9C12LZF34P5DgG9VLWUVelUdTsR-N3OuTZMNO4PAFlLT9U&usqp=CAU', info: 'Refrescante y mentolado aroma a eucalipto, perfecto para la concentración.' },

];

const testimonials = [
  { name: 'Ana García', rating: 5, review: '¡Las velas son increíbles! El aroma dura muchísimo tiempo.', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Carlos Rodríguez', rating: 4, review: 'Me encantó la presentación y la calidad de los productos.', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Laura Pérez', rating: 5, review: 'El envío fue súper rápido y las velas llegaron en perfecto estado. ¡Recomendadísimo!', image: 'https://i.pravatar.cc/150?img=3' },
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
      <AnimatedTitle text="Opiniones de Nuestros Clientes" className="testimonials-title" />
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
      <Features />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
