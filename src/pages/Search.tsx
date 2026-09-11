import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Zap, Swords, Wrench, Users, Palette, ExternalLink, AlertCircle } from 'lucide-react';
import { searchNavItems } from '../data/navigation';
import type { NavItem } from '../data/navigation';
import ParticleBackground from '../components/ParticleBackground';
import Icon from '../components/Icon';
import './Search.css';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<NavItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      const searchResults = searchNavItems(searchQuery);
      setResults(searchResults);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <div className="search-page">
      <ParticleBackground />
      
      <div className="page-container">
        <div className="search-header">
          <div className="search-icon-wrapper pulse">
            <SearchIcon size={36} className="search-icon" />
          </div>
          <h1 className="glow">搜索导航</h1>
          <p>在所有分类中搜索网站和工具</p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
            <SearchIcon size={22} className="input-icon" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="输入关键词搜索..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <Zap size={18} />
              <span>搜索</span>
            </button>
          </div>
        </form>

        {searchParams.get('q') && (
          <div className="search-results">
            <div className="results-header">
              <h2>搜索结果</h2>
              <span className="result-query">"{searchParams.get('q')}"</span>
              <span className="result-count">找到 {results.length} 个结果</span>
            </div>
            
            {results.length > 0 ? (
              <div className="results-grid">
                {results.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="result-item fade-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      animationDelay: `${index * 0.08}s`,
                      '--item-color': item.color
                    } as React.CSSProperties}
                  >
                    <div className="result-icon-wrapper" style={{ background: `${item.color}20` }}>
                      <Icon name={item.iconName} size={24} color={item.color} />
                    </div>
                    <div className="item-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ExternalLink size={18} className="external-link" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="no-results shake">
                <AlertCircle size={48} className="no-results-icon" />
                <h3>没有找到相关结果</h3>
                <p>尝试使用不同的关键词</p>
              </div>
            )}
          </div>
        )}

        {!searchParams.get('q') && (
          <div className="search-tips fade-in">
            <h3>搜索提示</h3>
            <div className="tips-grid">
              <div className="tip-item bounce delay-100">
                <Swords size={20} className="tip-icon" />
                <span>尝试搜索 "攻略" 或 "零式"</span>
              </div>
              <div className="tip-item bounce delay-200">
                <Wrench size={20} className="tip-icon" />
                <span>搜索 "工具" 或 "数据库"</span>
              </div>
              <div className="tip-item bounce delay-300">
                <Users size={20} className="tip-icon" />
                <span>搜索 "社区" 或 "论坛"</span>
              </div>
              <div className="tip-item bounce delay-400">
                <Palette size={20} className="tip-icon" />
                <span>搜索 "幻化" 或 "音乐"</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
