import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '12px',

  '.circular-progress': {
    width: '60px',
    height: '60px',
    '.CircularProgressbar-text': {
      fontFamily: '$roboto700',
      fontSize: '$xxlarge',
      lineHeight: '$xlarge',
      letterSpacing: '-0.08px',
      textAlign: 'left',
    },
  },

  '@bp3': {
    marginTop: '32px',
  },
});

export const Text = styled('p', {
  fontFamily: '$roboto400',
  maxWidth: '100px',
  fontSize: '$small',
  lineHeight: '$xmedium',
  textAlign: 'left',
  color: '$white',
});
