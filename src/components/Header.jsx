import React, { useContext } from 'react';
import './Header.css';
import { FaFacebook, FaInstagram, FaTwitter, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/"><h1>Velas Aromáticas</h1></Link>
      </div>
      <div className="header-nav">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
      <div className="header-social">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </header>
  );
};

export default Header;
