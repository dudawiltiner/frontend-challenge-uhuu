import { styled } from '@/../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  paddingBottom: '64px',
});

export const NoDataText = styled('p', {
  fontFamily: '$roboto700',
  fontSize: '$small',
  lineHeight: '$xmedium',
  color: '$gray700',
  textAlign: 'center',
});
