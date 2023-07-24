import { styled } from '@/../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  flexGrow: 1,
  gap: '24px',
  maxWidth: '100%',
  margin: '24px 112px 0px 112px',

  '@bp1': {
    margin: '24px 56px 0px 56px',
  },

  '@bp2': {
    margin: '24px 24px 0px 24px',
  },

  '@bp3': {
    margin: '0px 24px 0px 24px',
  },

  '@bp4': {
    margin: '0px 16px 0px 16px',
  },

  '::-webkit-scrollbar': {
    width: '5px',
    height: '12px',
  },

  '::-webkit-scrollbar-track': {
    borderRadius: '100px',
    backgroundColor: '$neutral400',
  },

  '::-webkit-scrollbar-thumb': {
    borderLeft: 0,
    borderRight: 0,
    borderRadius: '100px',
    backgroundColor: '$neutral500',
  },
});

export const Box = styled('div', {
  display: 'flex',
  flexGrow: 1,
  gap: '24px',
  width: '100%',
  height: '380px',
  overflowX: 'auto',
  paddingX: '2px',
});
