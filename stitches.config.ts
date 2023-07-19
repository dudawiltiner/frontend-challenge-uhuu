import { createStitches } from '@stitches/react';
import { Roboto } from 'next/font/google';

Roboto({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-inter-400',
  subsets: ['latin'],
  display: 'swap',
});

Roboto({
  weight: ['700'],
  style: ['normal'],
  variable: '--font-inter-700',
  subsets: ['latin'],
  display: 'swap',
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray500: '#646464',
      gray600: '#323232',
      pink500: '#E73980',
      pink800: '#861040',
      purple: '#5C16C5',
    },
    fonts: {
      roboto400: 'var(--font-inter-400)',
      roboto700: 'var(--font-inter-700)',
    },
    fontSizes: {
      xsmall: '14px',
      small: '16px',
      xmedium: '18px',
      medium: '20px',
      xxlarge: '28px',
      xlarge: '32px',
      large: '48px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
  },
});
