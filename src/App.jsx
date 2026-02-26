import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Stats from './components/Stats';
import Ecosystem from './components/Ecosystem';
import Backers from './components/Backers';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
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
      {/* <Technology />
      <Stats /> */}
      <Ecosystem />
      <Backers />
      {/* <Roadmap />
      <CTA /> */}
      <Footer />
    </div>
  );
}

export default App;
