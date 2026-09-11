import { createContext, useContext, useState, useCallback, useLayoutEffect, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'roadsign-theme';

function detectTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(detectTheme);

  const setTheme = useCallback((t: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(
    (e?: ReactMouseEvent<HTMLButtonElement>) => {
      const next: Theme = theme === 'light' ? 'dark' : 'light';

      if (!e || typeof document.startViewTransition !== 'function') {
        setTheme(next);
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const r = Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy));

      try {
        const vt = document.startViewTransition(() => {
          setTheme(next);
        });
        void vt.ready
          .then(() =>
            document.documentElement.animate(
              {
                clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${r}px at ${cx}px ${cy}px)`],
              },
              {
                duration: 400,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                pseudoElement: '::view-transition-new(root)',
              },
            ).finished,
          )
          .catch(() => {});
      } catch {
        setTheme(next);
      }
    },
    [theme, setTheme],
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

