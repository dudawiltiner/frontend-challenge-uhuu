import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  flexGrow: 1,
  gap: '24px',
  maxWidth: '100%',
  margin: '40px 112px 0px 112px',

  '@bp1': {
    margin: '40px 56px 0px 56px',
  },

  '@bp2': {
    margin: '40px 24px 0px 24px',
  },

  '@bp3': {
    margin: '40px 24px 0px 24px',
  },

  '@bp4': {
    margin: '40px 16px 0px 16px',
  },
});
