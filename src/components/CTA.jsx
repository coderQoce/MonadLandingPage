import React, { useEffect, useRef } from 'react';
import './CTA.css';

const CTA = () => {
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

  return (
    <section className="cta section" id="cta" ref={sectionRef}>
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-particles">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="cta-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="cta-content animate-on-scroll">
          <h2 className="cta-title">
            Build at the Speed of Monad
          </h2>
          <p className="cta-subtitle">
            Join thousands of developers building the future of decentralized applications 
            on Monad's high-performance infrastructure. Start building today and experience 
            the next generation of blockchain technology.
          </p>
          
          <div className="cta-buttons">
            <a href="https://docs.monad.xyz" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large cta-btn-primary">
              Start Building
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://discord.gg/monad" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large cta-btn-secondary">
              Join Community
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M20.84 4.61C20.3292 4.099 19.5223 3.989 18.88 4.32L3.38 12.32C2.729 12.656 2.433 13.421 2.681 14.09C2.761 14.307 2.891 14.5 3.06 14.65L8.58 20.17C8.73 20.339 8.923 20.469 9.14 20.549C9.809 20.797 10.574 20.501 10.91 19.85L18.91 4.35C19.241 3.7077 19.131 2.9008 18.62 2.39L20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">10,000+</div>
              <div className="cta-stat-label">Developers</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">50+</div>
              <div className="cta-stat-label">dApps Built</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">$1M+</div>
              <div className="cta-stat-label">Developer Grants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
