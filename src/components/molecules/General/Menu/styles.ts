import { styled } from '@/../stitches.config';

export const PinkContainer = styled('menu', {
  display: 'flex',
  paddingY: '16px',
  paddingLeft: '112px',
  height: 'max-content',
  margin: '0px',
  width: '100%',
  backgroundColor: '$pink500',
  justifyContent: 'left',

  '@bp3': {
    paddingLeft: '72px',
  },

  '@bp4': {
    paddingLeft: '0px',
    justifyContent: 'center',
  },
});
