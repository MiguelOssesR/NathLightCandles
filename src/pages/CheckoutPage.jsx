import React from 'react';
import Marquee from '../components/Marquee';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div>
      <Marquee />
      <Header />
      <div className="checkout-container">
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
