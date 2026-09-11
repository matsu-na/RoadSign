import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swords, Home, Info, Star } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' ? 'active' : '';
    }
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Swords className="brand-icon" size={24} />
          </div>
          <span className="brand-text">ROADSIGN</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className={`navbar-item ${isActive('/')}`}>
            <Home size={18} />
            <span>首页</span>
          </Link>
          <Link to="/features" className={`navbar-item ${isActive('/features')}`}>
            <Star size={18} />
            <span>功能</span>
          </Link>
          <Link to="/about" className={`navbar-item ${isActive('/about')}`}>
            <Info size={18} />
            <span>关于</span>
          </Link>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
