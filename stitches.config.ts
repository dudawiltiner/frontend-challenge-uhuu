import { createStitches } from '@stitches/react';
import { Roboto } from 'next/font/google';

export const roboto400 = Roboto({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-inter-400',
  subsets: ['latin'],
  display: 'swap',
});

export const roboto700 = Roboto({
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
      green: '#14FF00',
      orange: '#D18000',
      gray500: '#646464',
      gray600: '#323232',
      pink500: '#E73980',
      pink800: '#861040',
      purple: '#5C16C5',
      neutral300: 'rgba(255, 255, 255, 1)',
      neutral400: 'rgba(221, 221, 221, 1)',
      neutral500: 'rgba(173, 173, 173, 1)',
      neurtal700: 'rgba(19, 19, 19, 1)',
    },
    fonts: {
      roboto400: `${roboto400.style.fontFamily}`,
      roboto700: `${roboto700.style.fontFamily}`,
    },
    fontSizes: {
      xsmall: '14px',
      small: '16px',
      xmedium: '18px',
      medium: '20px',
      xxxlarge: '24px',
      xxlarge: '28px',
      xlarge: '32px',
      large: '48px',
    },
    lineHeights: {
      xmedium: '20px',
      medium: '24px',
      xxxlarge: '28px',
      xxlarge: '30px',
      xlarge: '38px',
      large: '56px',
    },
  },
  media: {
    bp1: '(max-width:1264px)',
    bp2: '(max-width:1056px)',
    bp3: '(max-width:875px)',
    bp4: '(max-width:640px)',
    bp5: '(max-width:432px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  },
});
