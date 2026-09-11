import { 
  Home, Search, Info, Compass, Shield, Zap,
  Swords, BookOpen, Target, Wrench, Database, Globe, BarChart3, BookMarked,
  Hammer, FileText, Map, DollarSign, Users, MessageCircle, Gamepad, Bot,
  Palette, Shirt, Cat, Trophy, Music, Video, Paintbrush, Book,
  ChevronRight, ExternalLink, ArrowLeft, X, AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Search,
  Info,
  Compass,
  Shield,
  Zap,
  Swords,
  BookOpen,
  Target,
  Wrench,
  Database,
  Globe,
  BarChart3,
  BookMarked,
  Hammer,
  FileText,
  Map,
  DollarSign,
  Users,
  MessageCircle,
  Gamepad,
  Bot,
  Palette,
  Shirt,
  Cat,
  Trophy,
  Music,
  Video,
  Paintbrush,
  Book,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  X,
  AlertCircle
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ name, size = 24, color, className = '' }: IconProps) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return <AlertCircle size={size} color={color} className={className} />;
  }
  
  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
