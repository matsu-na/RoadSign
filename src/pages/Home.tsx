import { useState, useEffect } from 'react';
import { Swords, ExternalLink, Search } from 'lucide-react';
import { categories, searchNavItems } from '../data/navigation';
import type { NavItem } from '../data/navigation';
import ParticleBackground from '../components/ParticleBackground';
import Icon from '../components/Icon';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NavItem[]>([]);
  const fullText = '牧丸导航站·攻略工具一站直达';

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchNavItems(searchQuery.trim());
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setInterval>;
    let resetTimeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      index = 0;
      setTypedText('');
      timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          resetTimeout = setTimeout(startTyping, 5000);
        }
      }, 80);
    };

    startTyping();

    return () => {
      clearInterval(timer);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="home">
      <ParticleBackground />
      
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">
              <Swords size={18} className="badge-icon" />
              <span className="badge-text">NAVIGATION</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-main">ROADSIGN</span>
            </h1>
            
            <p className="hero-subtitle">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </p>
            
       
          </div>

          <div className="hero-search">
            <div className="search-container">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索站点..."
                  className="search-input"
                />
                <div className="search-hint">
                  <kbd>Ctrl</kbd>
                  <kbd>K</kbd>
                </div>
              </div>
              
              <div className={`search-results ${searchResults.length > 0 ? 'active' : ''}`}>
                {searchResults.slice(0, 8).map((item, index) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="search-result-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Icon name={item.iconName} size={18} color={item.color} />
                    <span className="result-title">{item.title}</span>
                    <span className="result-desc">{item.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nav-section">
        <div className="section-header">
          <div className="header-decoration"></div>
          <h2 className="glow">站点导航</h2>
          <div className="header-decoration"></div>
        </div>
        
        <div className="categories-list">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-block fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-block-header" style={{ '--block-color': category.color } as React.CSSProperties}>
                <Icon name={category.iconName} size={20} color={category.color} />
                <h3>{category.name}</h3>
              </div>
              <div className="category-block-items">
                {category.items.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="category-link-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--item-color': item.color } as React.CSSProperties}
                  >
                    <Icon name={item.iconName} size={16} color={item.color} />
                    <span>{item.title}</span>
                    <ExternalLink size={14} className="link-arrow" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">

      </footer>
    </div>
  );
};

export default Home;
