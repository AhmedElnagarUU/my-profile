"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { THEME_COLORS } from '@/lib/constants';

type Theme = keyof typeof THEME_COLORS;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>('blue');

  useEffect(() => {
    document.documentElement.className = THEME_COLORS[theme];
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// "use client";

// import { createContext, useContext, useState, useEffect } from 'react';
// import { THEME_COLORS } from '@/lib/constants';

// type Theme = keyof typeof THEME_COLORS;

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('blue');

//   useEffect(() => {
//     document.documentElement.className = THEME_COLORS[theme];
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }