import React, { useEffect, useRef } from 'react';
import './Technology.css';

const Technology = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.tech-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Parallel Execution",
      description: "Execute multiple transactions simultaneously with groundbreaking parallel processing technology, dramatically increasing throughput and efficiency."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V6M12 18V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "MonadBFT Consensus",
      description: "Advanced Byzantine Fault Tolerant consensus mechanism ensuring unprecedented security, speed, and reliability for network operations."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "MonadDB Architecture",
      description: "Optimized database architecture designed for blockchain-specific workloads, enabling rapid data access and storage efficiency."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "100% EVM Compatibility",
      description: "Complete compatibility with Ethereum Virtual Machine, allowing seamless migration of existing dApps and developer tools."
    }
  ];

  return (
    <section className="technology section" id="technology" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Cutting-Edge Technology</h2>
          <p className="section-subtitle">
            Built with the latest innovations in blockchain technology to deliver unprecedented performance and scalability.
          </p>
        </div>

        <div className="tech-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="tech-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-icon">
                {feature.icon}
              </div>
              <h3 className="tech-title">{feature.title}</h3>
              <p className="tech-description">{feature.description}</p>
              <div className="tech-glow"></div>
            </div>
          ))}
        </div>

        <div className="tech-cta animate-on-scroll">
          <h3>Ready to experience the future?</h3>
          <p>Join thousands of developers building on Monad</p>
          <div className="btn-group">
            <a href="https://docs.monad.xyz" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read Documentation
            </a>
            <a href="#ecosystem" className="btn btn-secondary">
              View Ecosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
