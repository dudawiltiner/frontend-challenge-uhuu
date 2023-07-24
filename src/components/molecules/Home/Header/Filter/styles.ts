import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  alignContent: 'center',
  gap: '16px',
  marginX: '48px',

  '@bp4': {
    alignContent: 'left',
    marginX: '16px',
  },
});

export const BoxListChips = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '1033px',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '12px',

  '@bp4': {
    justifyContent: 'left',
  },
});
