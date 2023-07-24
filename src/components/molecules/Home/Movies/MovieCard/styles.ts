import { styled } from '@/../stitches.config';

export const Box = styled('button', {
  maxWidth: '176px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  background: 'transparent',
  border: 'none',
  padding: '0px',
  cursor: 'pointer',
});

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});
