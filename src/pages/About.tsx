import { Link } from 'react-router-dom';
import { Info, BookOpen, Search, Smartphone, Gamepad, ArrowLeft, Mail, GitBranch } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GameFrame from '../components/GameFrame';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <ParticleBackground />
      
      <div className="page-container">
        <div className="about-header">
          <div className="about-icon-wrapper pulse">
            <Info size={36} className="about-icon" />
          </div>
          <h1 className="glow">关于本站</h1>
          <p>一个参考 FFXIV.CN 设计的导航网站</p>
        </div>

        <div className="about-content">
          <GameFrame title="我们的目标" variant="blue">
            <p>
              这是一个精心策划的导航网站，旨在帮助最终幻想14玩家快速找到优质的攻略、工具和社区资源。
              我们收集了攻略、工具、生产、社区、资源、娱乐等各个领域的精选链接。
            </p>
          </GameFrame>

          <GameFrame title="功能特点" variant="purple">
            <div className="features-grid">
              <div className="feature-item bounce delay-100">
                <div className="feature-icon-wrapper">
                  <BookOpen size={32} />
                </div>
                <h3>分类清晰</h3>
                <p>按领域组织导航链接</p>
              </div>
              <div className="feature-item bounce delay-200">
                <div className="feature-icon-wrapper">
                  <Search size={32} />
                </div>
                <h3>搜索便捷</h3>
                <p>快速找到你需要的网站</p>
              </div>
              <div className="feature-item bounce delay-300">
                <div className="feature-icon-wrapper">
                  <Smartphone size={32} />
                </div>
                <h3>响应式设计</h3>
                <p>适配各种设备</p>
              </div>
              <div className="feature-item bounce delay-400">
                <div className="feature-icon-wrapper">
                  <Gamepad size={32} />
                </div>
                <h3>游戏风格</h3>
                <p>暗色主题设计</p>
              </div>
            </div>
          </GameFrame>


          <GameFrame title="联系我们" variant="purple">
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span className="contact-label">Email:</span>
                <span className="contact-value">example@example.com</span>
              </div>
              <div className="contact-item">
                <GitBranch size={20} className="contact-icon" />
                <span className="contact-label">GitHub:</span>
                <span className="contact-value">github.com/your-repo</span>
              </div>
            </div>
          </GameFrame>
        </div>

        <div className="about-footer">
          <Link to="/" className="back-home bounce">
            <ArrowLeft size={18} />
            <span>返回首页继续浏览</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
