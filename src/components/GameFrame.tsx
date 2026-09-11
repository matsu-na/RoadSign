import './GameFrame.css';

interface GameFrameProps {
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'gold' | 'blue' | 'purple';
  className?: string;
}

const GameFrame = ({ children, title, variant = 'default', className = '' }: GameFrameProps) => {
  return (
    <div className={`game-frame game-frame--${variant} ${className}`}>
      <div className="game-frame__corner game-frame__corner--tl"></div>
      <div className="game-frame__corner game-frame__corner--tr"></div>
      <div className="game-frame__corner game-frame__corner--bl"></div>
      <div className="game-frame__corner game-frame__corner--br"></div>
      
      {title && (
        <div className="game-frame__header">
          <span className="game-frame__title">{title}</span>
        </div>
      )}
      
      <div className="game-frame__content">
        {children}
      </div>
    </div>
  );
};

export default GameFrame;
