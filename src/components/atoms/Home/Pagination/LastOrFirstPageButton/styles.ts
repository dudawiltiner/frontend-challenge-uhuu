import { styled } from '@/../stitches.config';

export const LastPageSelect = styled('button', {
  borderRadius: '4px',
  padding: '9px 8px 8px 8px',
  color: '$purple',
  textAlign: 'center',
  fontFamily: '$roboto700',
  fontSize: '$small',
  lineHeight: '$medium',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(92, 22, 197, 0.3)',
  },
});
