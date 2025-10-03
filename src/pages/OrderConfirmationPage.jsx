import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './OrderConfirmationPage.css';

const OrderConfirmationPage = () => {
  return (
    <div>
      <Marquee />
      <Header />
      <div className="confirmation-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu pedido ha sido realizado con éxito.</p>
        <Link to="/" className="back-to-home-button">Volver a la tienda</Link>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;
