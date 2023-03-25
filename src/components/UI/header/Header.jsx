import React from 'react';
import logo from '../../../img/logo1.png';
import './Header.css';
export const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
    </header>
  );
};
