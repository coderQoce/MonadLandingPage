import React, { useEffect, useRef } from 'react';
import './Roadmap.css';

const Roadmap = () => {
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

  const roadmapItems = [
    {
      phase: 'Testnet Launch',
      quarter: 'Q1 2024',
      status: 'completed',
      description: 'Successful testnet launch with over 100,000 active users and 1M+ transactions.',
      highlights: ['Network deployment', 'Developer tools', 'Initial dApps']
    },
    {
      phase: 'Ecosystem Growth',
      quarter: 'Q2 2024',
      status: 'active',
      description: 'Rapid expansion of the ecosystem with strategic partnerships and dApp integrations.',
      highlights: ['50+ dApps launched', 'Strategic partnerships', 'Liquidity programs']
    },
    {
      phase: 'Mainnet 2025',
      quarter: 'Q4 2024',
      status: 'upcoming',
      description: 'Full mainnet launch with comprehensive security audits and production-ready infrastructure.',
      highlights: ['Mainnet deployment', 'Security audits', 'Production readiness']
    },
    {
      phase: 'ZK Integrations',
      quarter: 'Q2 2025',
      status: 'upcoming',
      description: 'Integration of zero-knowledge proofs for enhanced privacy and scalability.',
      highlights: ['ZK rollups', 'Privacy features', 'Scalability boost']
    },
    {
      phase: 'Cross-Chain Expansion',
      quarter: 'Q4 2025',
      status: 'future',
      description: 'Multi-chain interoperability connecting Monad with major blockchain networks.',
      highlights: ['Cross-chain bridges', 'Multi-chain dApps', 'Ecosystem integration']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10B981';
      case 'active':
        return '#6C3BFF';
      case 'upcoming':
        return '#F59E0B';
      case 'future':
        return '#6B7280';
      default:
        return '#6B7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      case 'future':
        return 'Future';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="roadmap section" id="roadmap" ref={sectionRef}>
      <div className="container">
        <div className="roadmap-header animate-on-scroll">
          <h2 className="section-title">Development Roadmap</h2>
          <p className="section-subtitle">
            Our strategic vision for the future of Monad and the broader blockchain ecosystem.
          </p>
        </div>

        <div className="roadmap-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {roadmapItems.map((item, index) => (
              <div
                key={item.phase}
                className={`timeline-item animate-on-scroll ${item.status}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="timeline-marker">
                  <div 
                    className="marker-dot"
                    style={{ backgroundColor: getStatusColor(item.status) }}
                  ></div>
                  <div className="marker-ring"></div>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-phase">
                      <h3>{item.phase}</h3>
                      <span className="timeline-quarter">{item.quarter}</span>
                    </div>
                    <div 
                      className="timeline-status"
                      style={{ color: getStatusColor(item.status) }}
                    >
                      {getStatusText(item.status)}
                    </div>
                  </div>
                  
                  <p className="timeline-description">
                    {item.description}
                  </p>
                  
                  <div className="timeline-highlights">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="roadmap-footer animate-on-scroll">
          <div className="roadmap-cta">
            <h3>Join Us on This Journey</h3>
            <p>Be part of the future of high-performance blockchain technology</p>
            <div className="btn-group">
              <a href="https://docs.monad.xyz" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Technical Roadmap
              </a>
              <a href="https://discord.gg/monad" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
