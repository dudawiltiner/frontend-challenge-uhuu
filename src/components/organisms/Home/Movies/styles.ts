import { styled } from '@/../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const Box = styled('div', {
  display: 'flex',
  maxWidth: '1216px',
  width: 'max-content',
  flexWrap: 'wrap',
  justifyContent: 'left',
  alignItems: 'start',
  marginTop: '29px',
  marginX: '24px',
  gap: '48px 32px',

  '@bp1': {
    maxWidth: '1008px',
  },
  '@bp2': {
    maxWidth: '800px',
  },
  '@bp3': {
    maxWidth: '592px',
  },
  '@bp4': {
    gap: '24px 16px',
    maxWidth: '384px',
  },
  '@bp5': {
    maxWidth: '176px',
  },
});
