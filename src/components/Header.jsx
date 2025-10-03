import React, { useContext } from 'react';
import './Header.css';
import { FaTiktok, FaLemon, FaShoppingCart } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/"><h1>NATHLIGHTCANDLES</h1></Link>
      </div>
      <div className="header-right-side">
        <div className="header-social">
          <a href="#"><AiFillInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaLemon /></a>
        </div>
        <div className="header-nav">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cart.length > 0 && <span className="cart-count">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
