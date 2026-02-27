import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Backers from './components/Backers';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/scrollAnimations';
import './styles/global.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize animations after component mounts
    const timer = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Ecosystem />
      <Backers />
      <Footer />
    </div>
  );
}

export default App;
