import { Link } from 'react-router-dom';
import {
  ArrowLeft, Layers, Search, Moon, Smartphone,
  Zap, Shield, Palette, Globe, Keyboard, Gamepad2,
  ChevronRight, Star
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import './Features.css';

const features = [
  {
    icon: Layers,
    title: '分类导航',
    desc: '6大分类涵盖攻略、工具、生产、社区、资源、影音，一站直达',
    color: '#2d8cf0',
  },
  {
    icon: Search,
    title: '智能搜索',
    desc: '支持 Ctrl+K 快捷键唤起，实时模糊匹配站点内容',
    color: '#19be6b',
  },
  {
    icon: Moon,
    title: '深色/浅色主题',
    desc: '一键切换暗色与亮色模式，自动记忆偏好设置',
    color: '#722ed1',
  },
  {
    icon: Smartphone,
    title: '响应式布局',
    desc: '自适应桌面、平板、手机等多种屏幕尺寸',
    color: '#eb2f96',
  },
  {
    icon: Zap,
    title: '极速加载',
    desc: '基于 Vite 构建，秒级启动开发服务器和生产构建',
    color: '#f90',
  },
  {
    icon: Shield,
    title: 'TypeScript',
    desc: '全程 TypeScript 开发，类型安全，代码健壮',
    color: '#2d8cf0',
  },
  {
    icon: Palette,
    title: '粒子特效',
    desc: 'Canvas 实现动态粒子背景，暗色主题下效果更佳',
    color: '#ed4014',
  },
  {
    icon: Globe,
    title: 'Lucide 图标',
    desc: '统一使用 Lucide 图标库，风格一致，轻量美观',
    color: '#19be6b',
  },
];

const stats = [
  { value: '6', label: '分类', color: '#2d8cf0' },
  { value: '24', label: '精选链接', color: '#19be6b' },
  { value: '2', label: '主题', color: '#722ed1' },
  { value: '∞', label: '持续更新', color: '#f90' },
];

const Features = () => {
  return (
    <div className="features-page">
      <ParticleBackground />

      <div className="page-container">
        <div className="features-header">
          <div className="features-icon-wrapper pulse">
            <Star size={36} className="features-icon" />
          </div>
          <h1 className="glow">功能特色</h1>
          <p>ROADSIGN 导航站为你提供的所有能力</p>
        </div>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-card bounce"
              style={{ animationDelay: `${i * 0.1}s`, '--stat-color': s.color } as React.CSSProperties}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label-text">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="features-grid-page">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feature-card bounce"
              style={{ animationDelay: `${i * 0.08}s`, '--card-accent': f.color } as React.CSSProperties}
            >
              <div className="feature-card-icon" style={{ background: `${f.color}18`, color: f.color }}>
                <f.icon size={28} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ChevronRight size={18} className="feature-card-arrow" />
            </div>
          ))}
        </div>

        <div className="features-tech-section">
          <div className="tech-header">
            <Keyboard size={22} />
            <h2>技术栈</h2>
          </div>
          <div className="tech-chips">
            {['React 18', 'TypeScript', 'Vite', 'React Router v6', 'Lucide React', 'CSS3'].map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </div>

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
