import { styled } from '@/../stitches.config';

export const Box = styled('div', {
  maxWidth: '175px',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  background: '$white',
  borderRadius: '4px',
  padding: '8px',
  backgroundColor: '$neutral300',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});
