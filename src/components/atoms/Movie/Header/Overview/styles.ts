import { styled } from '@/../stitches.config';

export const Box = styled('div', {
  marginTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Title = styled('p', {
  fontFamily: '$roboto700',
  fontSize: '$medium',
  lineHeight: '$medium',
  textAlign: 'left',
  color: '$white',
});

export const Text = styled('p', {
  fontFamily: '$roboto400',
  fontSize: '$small',
  lineHeight: '$medium',
  letterSpacing: '-0.08px',
  textAlign: 'left',
  maxWidth: '760px',
  color: '$neutral400',
});
