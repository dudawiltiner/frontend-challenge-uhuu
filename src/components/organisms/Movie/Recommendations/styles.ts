import { styled } from '@/../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  flexGrow: 1,
  gap: '24px',
  maxWidth: '100%',
  margin: '64px 112px 64px 112px',

  '@bp1': {
    margin: '64px 56px 64px 56px',
  },

  '@bp2': {
    margin: '64px 24px 64px 24px',
  },

  '@bp3': {
    margin: '49px 24px 0px 24px',
  },

  '@bp4': {
    margin: '49px 16px 0px 16px',
  },
});

export const Box = styled('div', {
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'left',
  alignItems: 'start',
  gap: '48px 32px',

  '@bp4': {
    gap: '24px 16px',
  },
});
