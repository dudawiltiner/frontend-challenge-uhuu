import { styled } from '@/../stitches.config';

export const ImageStyle = styled('div', {
  width: '383px',
  height: '574px',
  borderRadius: '8px',
  backgroundSize: '383px 574px !important',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  '@bp3': {
    width: '263px',
    height: '384px',
    backgroundSize: '263px 384px !important',
  },

  '@bp4': {
    width: '186px',
    height: '279px',
    backgroundSize: '186px 279px !important',
  },
});
