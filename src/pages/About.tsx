import { Link } from 'react-router-dom';
import {
  ArrowLeft, Target, Lightbulb,
  Mail, Globe, MessageCircle
} from 'lucide-react';
import './About.css';

const purposeItems = [
  {
    icon: Target,
    title: '整合资源',
    desc: '将分散的攻略、工具、社区资源汇聚一处，告别频繁切换书签的烦恼',
  },
  {
    icon: Lightbulb,
    title: '高效检索',
    desc: '通过分类导航与智能搜索，帮助玩家在最短时间内定位所需站点',
  },
];

const techStack = [
  { label: 'React', value: 'v19.2' },
  { label: 'TypeScript', value: 'v6.0' },
  { label: 'Vite', value: 'v8.3' },
  { label: 'Lucide Icons', value: 'v1.44' },
  { label: 'CSS3', value: '自适应布局' },
  { label: 'React Router', value: 'v7.18' },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="page-container">


        <div className="about-content">
          <h2 style={{ color: 'var(--textColor)', marginBottom: '-4px' }}>为什么做这个网站</h2>
          <p>
            作为一名《最终幻想14》玩家，日常游戏中频繁需要查阅各类攻略、使用生产宏、查询市场物价、浏览社区讨论……这些资源散落在十几个不同的网站里，每次都要翻找书签或搜索引擎，效率很低。
          </p>
          <p>
            于是我决定做一个导航站，把最常用、最靠谱的站点按分类整理在一起，做到<strong style={{ color: 'var(--primaryColor)' }}>一站直达</strong>——打开 ROADSIGN，点击即可跳转，省去反复搜索的时间。
          </p>

          <h2 style={{ color: 'var(--textColor)', marginBottom: '-4px' }}>网站的意义</h2>
          <p>
            ROADSIGN 不只是一个链接合集。它的核心目标是<strong style={{ color: 'var(--primaryColor)' }}>降低信息获取成本</strong>，让玩家把更多时间花在享受游戏本身，而不是在浏览器里翻找页面。
          </p>
          <p>
            无论你是刚入坑的新人、研究生产的工匠，还是追求极限的高难玩家，都可以在这里快速找到你需要的工具与资源。未来还会持续收录和更新站点，让导航站与游戏版本同步演进。
          </p>

          <div className="features-grid">
            {purposeItems.map((item) => (
              <div className="feature-item fade-in" key={item.title}>
                <div className="feature-icon-wrapper">
                  <item.icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: 'var(--textColor)', marginBottom: '-4px' }}>技术栈</h2>
          <p>
            本站使用现代前端技术栈构建，追求轻量、快速与可维护性：
          </p>
          <div className="features-grid">
            {techStack.map((item) => (
              <div className="feature-item fade-in" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: 'var(--textColor)', marginBottom: '-4px' }}>联系方式</h2>
          <div className="contact-info">
            <div className="contact-item fade-in">
              <Mail size={20} className="contact-icon" />
              <span className="contact-label">邮箱</span>
              <span className="contact-value">your@email.com</span>
            </div>
            <div className="contact-item fade-in">
              <Globe size={20} className="contact-icon" />
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/your-name</span>
            </div>
            <div className="contact-item fade-in">
              <MessageCircle size={20} className="contact-icon" />
              <span className="contact-label">QQ 群</span>
              <span className="contact-value">123456789</span>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            如有建议或希望收录的站点，欢迎通过以上方式联系我。
          </p>
        </div>

        <div className="about-footer">
          <Link to="/" className="back-home bounce">
            <ArrowLeft size={18} />
            <span>返回首页</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
