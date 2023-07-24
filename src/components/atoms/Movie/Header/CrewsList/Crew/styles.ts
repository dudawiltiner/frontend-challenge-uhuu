import { styled } from '@/../stitches.config';

export const Box = styled('div', {
  width: '174px',
  display: 'flex',
  flexDirection: 'column',
  '@bp1': {
    width: '140px',
  },
});

export const Title = styled('p', {
  fontFamily: '$roboto700',
  fontSize: '$small',
  lineHeight: '$medium',
  textAlign: 'left',
  color: '$white',
});

export const Text = styled('p', {
  fontFamily: '$roboto400',
  fontSize: '$xsmall',
  lineHeight: '$xmedium',
  textAlign: 'left',
  color: '$neutral400',
});
