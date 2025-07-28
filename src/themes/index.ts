import { colors, typography, spacing, shadows, radii } from './tokens';

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  radii,
  
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  }
};

export type Theme = typeof theme;
