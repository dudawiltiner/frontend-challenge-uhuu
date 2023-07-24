import { styled } from '@/../stitches.config';

export const Text = styled('h1', {
  margin: '0px',
  fontFamily: '$roboto700',
  fontSize: '$large',
  lineHeight: '$large',
  letterSpacing: '-0.24px',
  textAlign: 'center',
  maxWidth: '781px',
  color: '$white',
  marginX: '16px',

  '@bp4': {
    maxWidth: '430px',
    fontFamily: '$roboto700',
    fontSize: '$xxxlarge',
    lineHeight: '$xxxlarge',
    letterSpacing: '0px',
    textAlign: 'left',
    color: '$white',
  },
});
