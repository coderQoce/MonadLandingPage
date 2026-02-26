import React, { useEffect, useRef } from 'react';
import './Backers.css';

const Backers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const backers = [
    {
      name: 'Paradigm',
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <text x="0" y="25" fontSize="20" fontWeight="700">PARADIGM</text>
        </svg>
      ),
      link: 'https://paradigm.xyz'
    },
    {
      name: 'Dragonfly Capital',
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <text x="0" y="25" fontSize="18" fontWeight="600">DRAGONFLY</text>
        </svg>
      ),
      link: 'https://dragonfly.capital'
    },
    {
      name: 'Electric Capital',
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <text x="0" y="25" fontSize="18" fontWeight="600">ELECTRIC</text>
        </svg>
      ),
      link: 'https://electriccapital.com'
    },
    {
      name: 'Coinbase Ventures',
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <text x="0" y="25" fontSize="16" fontWeight="600">COINBASE</text>
        </svg>
      ),
      link: 'https://ventures.coinbase.com'
    },
    {
      name: 'Animoca Ventures',
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <text x="0" y="25" fontSize="16" fontWeight="600">ANIMOCA</text>
        </svg>
      ),
      link: 'https://animoca.com'
    }
  ];

  return (
    <section className="backers section" id="backers" ref={sectionRef}>
      <div className="container">
        <div className="backers-header animate-on-scroll">
          <h2 className="section-title">Backed by the Best</h2>
          <p className="section-subtitle">
            Supported by leading venture capital firms and investors in the blockchain space.
          </p>
        </div>

        <div className="backers-grid">
          {backers.map((backer, index) => (
            <a
              key={backer.name}
              href={backer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="backer-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="backer-logo">
                {backer.logo}
              </div>
              <div className="backer-name">
                {backer.name}
              </div>
            </a>
          ))}
        </div>

        <div className="backers-footer animate-on-scroll">
          <div className="backers-stats">
            <div className="stat">
              <div className="stat-number">$50M+</div>
              <div className="stat-label">Total Funding</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Strategic Partners</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Founder Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backers;
