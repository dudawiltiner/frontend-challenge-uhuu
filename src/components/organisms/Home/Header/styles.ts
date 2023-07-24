import { styled } from '@/../stitches.config';

export const HeaderContainer = styled('section', {
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  paddingY: '84px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$pink800',
  gap: '40px',

  '@bp4': {
    paddingY: '40px',
    alignItems: 'start',
  },
});
