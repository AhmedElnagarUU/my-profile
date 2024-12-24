import { THEME_COLORS } from '@/lib/constants';

export type ThemeColor = keyof typeof THEME_COLORS;

export interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}