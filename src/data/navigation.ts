export interface NavItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  iconName: string;
  color?: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  items: NavItem[];
}

export const categories: Category[] = [
  {
    id: 'guide',
    name: '攻略专区',
    description: '副本攻略、职业指南、任务流程',
    iconName: 'BookOpen',
    color: '#2d8cf0',
    items: [
      {
        id: 'raid-guide',
        title: '零式攻略',
        url: 'https://www.ffxiv.cn',
        description: '当前版本零式副本攻略',
        iconName: 'Swords',
        color: '#ed4014'
      },
      {
        id: 'trial-guide',
        title: '讨伐战攻略',
        url: 'https://www.ffxiv.cn',
        description: '讨伐歼灭战攻略',
        iconName: 'Shield',
        color: '#f90'
      },
      {
        id: 'msq-guide',
        title: '主线剧情',
        url: 'https://www.ffxiv.cn',
        description: '主线任务流程攻略',
        iconName: 'BookOpen',
        color: '#19be6b'
      },
      {
        id: 'job-guide',
        title: '职业指南',
        url: 'https://www.ffxiv.cn',
        description: '各职业玩法与配装',
        iconName: 'Target',
        color: '#722ed1'
      },      {
        id: 'raid-guide',
        title: '零式攻略',
        url: 'https://www.ffxiv.cn',
        description: '当前版本零式副本攻略',
        iconName: 'Swords',
        color: '#ed4014'
      },
      {
        id: 'trial-guide',
        title: '讨伐战攻略',
        url: 'https://www.ffxiv.cn',
        description: '讨伐歼灭战攻略',
        iconName: 'Shield',
        color: '#f90'
      },
      {
        id: 'msq-guide',
        title: '主线剧情',
        url: 'https://www.ffxiv.cn',
        description: '主线任务流程攻略',
        iconName: 'BookOpen',
        color: '#19be6b'
      },
      {
        id: 'job-guide',
        title: '职业指南',
        url: 'https://www.ffxiv.cn',
        description: '各职业玩法与配装',
        iconName: 'Target',
        color: '#722ed1'
      },      {
        id: 'raid-guide',
        title: '零式攻略',
        url: 'https://www.ffxiv.cn',
        description: '当前版本零式副本攻略',
        iconName: 'Swords',
        color: '#ed4014'
      },
      {
        id: 'trial-guide',
        title: '讨伐战攻略',
        url: 'https://www.ffxiv.cn',
        description: '讨伐歼灭战攻略',
        iconName: 'Shield',
        color: '#f90'
      },
      {
        id: 'msq-guide',
        title: '主线剧情',
        url: 'https://www.ffxiv.cn',
        description: '主线任务流程攻略',
        iconName: 'BookOpen',
        color: '#19be6b'
      },
      {
        id: 'job-guide',
        title: '职业指南',
        url: 'https://www.ffxiv.cn',
        description: '各职业玩法与配装',
        iconName: 'Target',
        color: '#722ed1'
      }
    ]
  },
  {
    id: 'tools',
    name: '实用工具',
    description: '游戏辅助工具与数据库',
    iconName: 'Wrench',
    color: '#19be6b',
    items: [
      {
        id: 'database',
        title: '官方数据库',
        url: 'https://ff14.hiclb.net',
        description: '物品、任务、NPC查询',
        iconName: 'Database',
        color: '#2d8cf0'
      },
      {
        id: 'lodestone',
        title: 'Lodestone',
        url: 'https://na.finalfantasyxiv.com/lodestone/',
        description: '官方角色数据查询',
        iconName: 'Globe',
        color: '#19be6b'
      },
      {
        id: 'fflogs',
        title: 'FFLogs',
        url: 'https://www.fflogs.com',
        description: '副本数据分析平台',
        iconName: 'BarChart3',
        color: '#f90'
      },
      {
        id: 'gmailotte',
        title: 'Gamer Escape',
        url: 'https://ffxiv.gamerescape.com',
        description: '英文数据库百科',
        iconName: 'BookMarked',
        color: '#722ed1'
      }
    ]
  },
  {
    id: 'craft',
    name: '生产采集',
    description: '生产宏、采集路线、交易数据',
    iconName: 'Hammer',
    color: '#f90',
    items: [
      {
        id: 'craft-macro',
        title: '生产宏',
        url: 'https://www.ffxiv.cn',
        description: '一键生产宏合集',
        iconName: 'Zap',
        color: '#2d8cf0'
      },
      {
        id: 'eriones',
        title: 'Eriones',
        url: 'https://eriones.com',
        description: '生产配方查询',
        iconName: 'FileText',
        color: '#19be6b'
      },
      {
        id: 'garlandtools',
        title: 'Garland Tools',
        url: 'https://garlandtools.org',
        description: '采集路线规划',
        iconName: 'Map',
        color: '#f90'
      },
      {
        id: 'universalis',
        title: 'Universalis',
        url: 'https://universalis.app',
        description: '市场物价查询',
        iconName: 'DollarSign',
        color: '#ed4014'
      }
    ]
  },
  {
    id: 'community',
    name: '社区论坛',
    description: '玩家社区、攻略讨论',
    iconName: 'Users',
    color: '#722ed1',
    items: [
      {
        id: 'nga',
        title: 'NGA论坛',
        url: 'https://bbs.nga.cn/thread.php?fid=730',
        description: '国服玩家讨论区',
        iconName: 'MessageCircle',
        color: '#2d8cf0'
      },
      {
        id: 'tieba',
        title: '百度贴吧',
        url: 'https://tieba.baidu.com/f?kw=ff14',
        description: '最终幻想14贴吧',
        iconName: 'Users',
        color: '#19be6b'
      },
      {
        id: 'discord',
        title: 'Discord',
        url: 'https://discord.gg/ffxiv',
        description: '国际服玩家社群',
        iconName: 'Gamepad',
        color: '#5865f2'
      },
      {
        id: 'reddit',
        title: 'Reddit',
        url: 'https://www.reddit.com/r/ffxiv/',
        description: '国际服玩家讨论',
        iconName: 'Bot',
        color: '#ff4500'
      }
    ]
  },
  {
    id: 'resources',
    name: '资源站点',
    description: '幻化、坐骑、成就查询',
    iconName: 'Palette',
    color: '#ed4014',
    items: [
      {
        id: 'glamour',
        title: 'Glamour',
        url: 'https://ffxiv.garlandtools.org/glamour/',
        description: '幻化搭配查询',
        iconName: 'Shirt',
        color: '#eb2f96'
      },
      {
        id: 'mount',
        title: '坐骑图鉴',
        url: 'https://www.ffxiv.cn',
        description: '坐骑获取方式汇总',
        iconName: 'Compass',
        color: '#f90'
      },
      {
        id: 'minion',
        title: '宠物图鉴',
        url: 'https://www.ffxiv.cn',
        description: '宠物获取方式汇总',
        iconName: 'Cat',
        color: '#19be6b'
      },
      {
        id: 'achievement',
        title: '成就查询',
        url: 'https://www.ffxiv.cn',
        description: '成就达成条件查询',
        iconName: 'Trophy',
        color: '#faad14'
      }
    ]
  },
  {
    id: 'media',
    name: '影音娱乐',
    description: '音乐、视频、同人作品',
    iconName: 'Music',
    color: '#eb2f96',
    items: [
      {
        id: 'music',
        title: 'FF14音乐',
        url: 'https://www.ffxiv.cn',
        description: '游戏原声音乐',
        iconName: 'Music',
        color: '#722ed1'
      },
      {
        id: 'video',
        title: '视频攻略',
        url: 'https://www.bilibili.com',
        description: 'B站攻略视频',
        iconName: 'Video',
        color: '#f90'
      },
      {
        id: 'fanart',
        title: '同人作品',
        url: 'https://www.pixiv.net',
        description: '玩家创作分享',
        iconName: 'Paintbrush',
        color: '#eb2f96'
      },
      {
        id: 'wiki',
        title: 'FF14 Wiki',
        url: 'https://wiki.ff14.com',
        description: '中文维基百科',
        iconName: 'Book',
        color: '#2d8cf0'
      }
    ]
  }
];

export const getAllNavItems = (): NavItem[] => {
  return categories.flatMap(category => category.items);
};

export const searchNavItems = (query: string): NavItem[] => {
  const lowerQuery = query.toLowerCase();
  return getAllNavItems().filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description?.toLowerCase().includes(lowerQuery)
  );
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
