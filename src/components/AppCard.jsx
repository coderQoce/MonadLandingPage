import React from 'react';
import './AppCard.css';

const AppCard = ({ app, index }) => {
  const handleVisitApp = () => {
   
    const url = `https://${app.name.toLowerCase().replace(/\s+/g, '-')}.monad.xyz`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSocialClick = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'DEX': '#4ECDC4',
      'Lending': '#45B7D1',
      'LST': '#96CEB4',
      'Aggregator': '#FF6B6B',
      'Vault': '#FFEAA7',
      'Perp': '#DDA0DD',
      'Bridge': '#98D8C8',
      'Infra': '#87CEEB',
      'Launchpad': '#FFD700',
      'Wallet': '#B19CD9',
      'NFT Marketplace': '#FFB6C1',
      'GameFi': '#90EE90',
      'SocialFi': '#F4A460',
      'AI': '#FFD700',
      'Others': '#6C3BFF'
    };
    return colors[category] || '#6C3BFF';
  };

  return (
    <div
      className="app-card animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="app-card-content">
        <div className="app-header">
          <div className="app-logo" style={{ backgroundColor: '#6C3BFF20', borderColor: '#6C3BFF' }}>
            <span className="app-logo-text">{app.name.charAt(0)}</span>
          </div>
          <div className="app-categories">
            <span
              className="category-badge"
              style={{ backgroundColor: getCategoryColor(app.category) + '20', borderColor: getCategoryColor(app.category) }}
            >
              {app.category}
            </span>
          </div>
        </div>

        <div className="app-info">
          <h3 className="app-name">{app.name}</h3>
          <p className="app-description">{app.description}</p>

          <div className="app-social-links">
            {app.x_link && (
              <button
                className="social-link twitter-link"
                onClick={(e) => handleSocialClick(app.x_link, e)}
                aria-label="Follow on Twitter/X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            )}
            {app.discord_link && (
              <button
                className="social-link discord-link"
                onClick={(e) => handleSocialClick(app.discord_link, e)}
                aria-label="Join Discord"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* <button
          className="app-visit-btn"
          onClick={handleVisitApp}
        >
          Visit App
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button> */}
      </div>

      <div className="app-card-glow"></div>
    </div>
  );
};

export default AppCard;
