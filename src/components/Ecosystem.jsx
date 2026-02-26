import React, { useState, useEffect, useRef } from 'react';
import AppCard from './AppCard';
import { ecosystemApps, getCategoriesWithCounts, fetchEcosystemApps, getAppsByCategory, searchApps } from '../data/ecosystemData';
import './Ecosystem.css';

const Ecosystem = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [displayedApps, setDisplayedApps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(9);
  const [categories, setCategories] = useState(getCategoriesWithCounts());
  const sectionRef = useRef(null);

  useEffect(() => {
    const loadApps = async () => {
      try {
        setLoading(true);
        const fetchedApps = await fetchEcosystemApps();
        setApps(fetchedApps);
        setFilteredApps(fetchedApps);
        setDisplayedApps(fetchedApps.slice(0, showCount));
        setCategories(getCategoriesWithCounts());
      } catch (error) {
        console.error('Failed to fetch ecosystem apps:', error);
        // Fallback to static data
        setApps(ecosystemApps);
        setFilteredApps(ecosystemApps);
        setDisplayedApps(ecosystemApps.slice(0, showCount));
        setCategories(getCategoriesWithCounts());
      } finally {
        setLoading(false);
      }
    };

    loadApps();
  }, []);

  useEffect(() => {
    let filtered = apps;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getAppsByCategory(selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = searchApps(searchTerm);
    }

    setFilteredApps(filtered);
    setDisplayedApps(filtered.slice(0, showCount));
  }, [apps, selectedCategory, searchTerm, showCount]);

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
  }, [filteredApps]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowCount(9); // Reset show count when category changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowCount(9); // Reset show count when search changes
  };

  const handleShowMore = () => {
    setShowCount(prev => prev + 10);
  };

  return (
    <section className="ecosystem section" id="ecosystem" ref={sectionRef}>
      <div className="container">
        <div className="ecosystem-header animate-on-scroll">
          <h2 className="section-title">Explore the Monad Ecosystem</h2>
          <p className="section-subtitle">
            Discover innovative applications and projects building on Monad's high-performance infrastructure.
          </p>
        </div>

        <div className="ecosystem-controls animate-on-scroll">
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search apps, categories, or descriptions..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </div>

          <div className="category-filters">
            <div className="filter-label">Filter by category:</div>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  disabled={category.count === 0 && category.id !== 'all'}
                >
                  {category.name}
                  <span className="filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="ecosystem-loading animate-on-scroll">
            <div className="loading-spinner"></div>
            <p>Loading ecosystem apps...</p>
          </div>
        ) : (
          <>
            <div className="ecosystem-results animate-on-scroll">
              <div className="results-info">
                <span className="results-count">{filteredApps.length}</span> apps found
                {selectedCategory !== 'all' && (
                  <span className="active-filter"> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
                {searchTerm && (
                  <span className="active-filter"> matching "{searchTerm}"</span>
                )}
              </div>

              {filteredApps.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No apps found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <>
                  <div className="apps-grid">
                    {displayedApps.map((app, index) => (
                      <AppCard key={`${app.name}-${index}`} app={app} index={index} />
                    ))}
                  </div>

                  {filteredApps.length > showCount && (
                    <div className="show-more-container">
                      <button className="btn btn-secondary show-more-btn" onClick={handleShowMore}>
                        Show More ({filteredApps.length - showCount} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Ecosystem;
