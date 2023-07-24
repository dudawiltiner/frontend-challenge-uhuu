import { styled } from '@/../stitches.config';

export const HeaderContainer = styled('section', {
  position: 'relative',
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  height: '600px',
  marginBottom: '72px',
  backgroundColor: '$pink800',

  '@bp3': {
    flexDirection: 'column',
    alignItems: 'center',
    height: 'max-content',
    marginBottom: '45px',
  },
});

export const ImageBox = styled('div', {
  position: 'absolute',
  top: '72px',
  left: '112px',
  zIndex: 1000,
  overflow: 'hidden',

  '@bp1': {
    left: '56px',
  },

  '@bp2': {
    left: '24px',
  },

  '@bp3': {
    position: 'relative',
    overflow: 'auto',
    top: 'auto',
    left: 'auto',
    marginTop: '40px',
  },
});
