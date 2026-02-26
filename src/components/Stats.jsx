import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    transactions: 0,
    addresses: 0,
    users: 0,
    projects: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetStats = {
    transactions: 5847293,
    addresses: 128456,
    users: 45823,
    projects: 127
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = ['transactions', 'addresses', 'users', 'projects'];
    
    counters.forEach((counter) => {
      let current = 0;
      const target = targetStats[counter];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [counter]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
  };

  const stats = [
    {
      id: 'transactions',
      value: formatNumber(counters.transactions),
      label: 'Total Transactions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 12L12 7L17 12M12 7V17M3 12C3 13.1046 3.89543 14 5 14H19C20.1046 14 21 13.1046 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'addresses',
      value: formatNumber(counters.addresses),
      label: 'Total Addresses',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'users',
      value: formatNumber(counters.users),
      label: 'Active Users',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'projects',
      value: formatNumber(counters.projects),
      label: 'Ecosystem Projects',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="stats section" id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-header animate-on-scroll">
          <h2 className="section-title">Network Traction</h2>
          <p className="section-subtitle">
            Real-time metrics showcasing the growing Monad ecosystem and network activity.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-value">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>

        <div className="stats-footer animate-on-scroll">
          <div className="stats-highlight">
            <div className="highlight-item">
              <div className="highlight-number">99.9%</div>
              <div className="highlight-label">Uptime</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">&lt;1s</div>
              <div className="highlight-label">Avg Block Time</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">$0.001</div>
              <div className="highlight-label">Avg Tx Fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
