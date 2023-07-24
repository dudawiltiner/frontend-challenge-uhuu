import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'top',
  gap: '8px',
  margin: '72px 112px 0px 527px',

  '@bp1': {
    margin: '72px 56px 0px 471px',
  },

  '@bp2': {
    margin: '72px 24px 0px 439px',
  },

  '@bp3': {
    margin: '42px 24px',
    maxWidth: '500px',
  },

  '@bp4': {
    margin: '42px 16px',
  },
});
