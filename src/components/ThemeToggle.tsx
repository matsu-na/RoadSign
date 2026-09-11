import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
    >
      <div className="toggle-track">
        <Sun size={14} className="icon sun-icon" />
        <Moon size={14} className="icon moon-icon" />
        <div className="toggle-thumb" />
      </div>
    </button>
  );
};

export default ThemeToggle;
