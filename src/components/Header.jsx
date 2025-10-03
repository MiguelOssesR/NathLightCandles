
import React from 'react';
import './Header.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Velas Aromáticas</h1>
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
