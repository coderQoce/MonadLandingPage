import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src="/images/logo.jpg" alt="Monad" className="navbar-logo-img" />
            <span>Monad</span>
          </div>

          <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
  
            <a href="#ecosystem" onClick={() => scrollToSection('ecosystem')}>Ecosystem</a>
            
          </div>

          <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
