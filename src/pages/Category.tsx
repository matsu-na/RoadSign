import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle } from 'lucide-react';
import { getCategoryById } from '../data/navigation';
import ParticleBackground from '../components/ParticleBackground';
import GameFrame from '../components/GameFrame';
import Icon from '../components/Icon';
import './Category.css';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = getCategoryById(id || '');

  if (!category) {
    return (
      <div className="category-page">
        <ParticleBackground />
        <div className="category-not-found">
          <AlertCircle size={64} className="error-icon shake" />
          <h2>分类不存在</h2>
          <p>请检查URL是否正确</p>
          <Link to="/" className="back-home">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <ParticleBackground />
      
      <div className="page-container">
        <div className="category-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={18} className="cursor-bounce" />
            <span>返回首页</span>
          </Link>
          
          <GameFrame variant="blue">
            <div className="category-title" style={{ '--category-color': category.color } as React.CSSProperties}>
              <div className="category-icon-wrapper" style={{ background: `${category.color}20` }}>
                <Icon name={category.iconName} size={48} color={category.color} />
              </div>
              <div className="category-info">
                <h1>{category.name}</h1>
                <p>{category.description}</p>
              </div>
            </div>
          </GameFrame>
        </div>

        <div className="nav-items-grid">
          {category.items.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              className="nav-item-card fade-in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                '--item-color': item.color,
                animationDelay: `${index * 0.1}s`
              } as React.CSSProperties}
            >
              <div className="item-icon-wrapper" style={{ background: `${item.color}20` }}>
                <Icon name={item.iconName} size={28} color={item.color} />
              </div>
              <div className="item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ExternalLink size={18} className="external-link" />
              {item.isNew && <span className="new-badge pulse">NEW</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
