import { Swords, ExternalLink, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <Swords size={20} className="footer-icon" />
            <span className="footer-name">ROADSIGN</span>
          </div>
          <p className="footer-desc">导航站 · 攻略工具一站直达</p>
        </div>

        <div className="footer-links">

          <a href="mailto:example@example.com" className="footer-link">
            <Mail size={18} />
            <span>联系我们</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <ExternalLink size={18} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ROADSIGN · Made with 牧丸
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
