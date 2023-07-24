import { styled } from '@/../stitches.config';

export const PageSelect = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '12px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(92, 22, 197, 0.3)',
  },
});

export const Text = styled('p', {
  width: '24px',
  height: '24px',
  color: '$purple',
  textAlign: 'center',
  fontFamily: '$roboto700',
  fontSize: '$small',
  lineHeight: '$medium',
});
