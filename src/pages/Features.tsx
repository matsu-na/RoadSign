import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Search, Moon, Smartphone,
  Zap, Shield, Palette, Globe, Gamepad2,
  Layers
} from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: Layers,
    title: '分类导航',
    desc: '6大分类涵盖攻略、工具、生产、社区、资源、影音，一站直达',
    color: '#2d8cf0',
    category: 'ui',
    tags: ['导航', '分类'],
  },
  {
    icon: Search,
    title: '智能搜索',
    desc: '支持 Ctrl+K 快捷键唤起，实时模糊匹配站点内容',
    color: '#19be6b',
    category: 'ux',
    tags: ['搜索', '快捷键'],
  },
  {
    icon: Moon,
    title: '深色/浅色主题',
    desc: '一键切换暗色与亮色模式，自动记忆偏好设置',
    color: '#722ed1',
    category: 'ui',
    tags: ['主题', '切换'],
  },
  {
    icon: Smartphone,
    title: '响应式布局',
    desc: '自适应桌面、平板、手机等多种屏幕尺寸',
    color: '#eb2f96',
    category: 'ui',
    tags: ['响应式', '布局'],
  },
  {
    icon: Zap,
    title: '极速加载',
    desc: '基于 Vite 构建，秒级启动开发服务器和生产构建',
    color: '#f90',
    category: 'tech',
    tags: ['Vite', '性能'],
  },
  {
    icon: Shield,
    title: 'TypeScript',
    desc: '全程 TypeScript 开发，类型安全，代码健壮',
    color: '#2d8cf0',
    category: 'tech',
    tags: ['TypeScript', '类型'],
  },
  {
    icon: Palette,
    title: '粒子特效',
    desc: 'Canvas 实现动态粒子背景，暗色主题下效果更佳',
    color: '#ed4014',
    category: 'ui',
    tags: ['特效', 'Canvas'],
  },
  {
    icon: Globe,
    title: 'Lucide 图标',
    desc: '统一使用 Lucide 图标库，风格一致，轻量美观',
    color: '#19be6b',
    category: 'tech',
    tags: ['图标', 'Lucide'],
  },
];

const Features = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = useMemo(() => {
    return features.filter((f) => {
      const matchesSearch = searchQuery === '' || 
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="features-page">
      <div className="page-container">
 

        <div className="features-filter">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="搜索功能..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>
                ×
              </button>
            )}
          </div>

 
        </div>
 

        {filteredFeatures.length === 0 && (
          <div className="no-results">
            <Search size={48} />
            <h3>未找到匹配的功能</h3>
            <p>尝试调整搜索关键词或筛选条件</p>
          </div>
        )}
 

        <div className="features-cta">
          <Link to="/" className="cta-btn primary-btn bounce">
            <Gamepad2 size={18} />
            <span>开始探索</span>
          </Link>
          <Link to="/about" className="cta-btn secondary-btn bounce delay-100">
            <span>了解更多</span>
          </Link>
        </div>

        <div className="features-footer">
          <Link to="/" className="back-home bounce">
            <ArrowLeft size={18} />
            <span>返回首页</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
