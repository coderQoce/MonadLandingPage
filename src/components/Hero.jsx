import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              High-Performance EVM.
              <br />
              <span className="gradient-text">Reimagined.</span>
            </h1>
            <p className="hero-subtitle">
              Experience the next generation of blockchain technology with parallel execution,
              10,000 TPS target, 1-second finality, and complete EVM compatibility.
            </p>
            <div className="hero-buttons">
              <a href="#ecosystem" className="btn btn-primary btn-large">
                Explore Ecosystem
              </a>
              <a href="https://app.monad.xyz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                View Dashboard
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/mon.jpg" alt="Monad" className="hero-image" />
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">TPS Target</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1s</div>
            <div className="stat-label">Finality</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">EVM Compatible</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
