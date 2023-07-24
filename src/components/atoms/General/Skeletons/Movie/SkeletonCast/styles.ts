import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  flexGrow: 1,
  gap: '24px',
  maxWidth: '100%',
  margin: '24px 112px 0px 112px',
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
