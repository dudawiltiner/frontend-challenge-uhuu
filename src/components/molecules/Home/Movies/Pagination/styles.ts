import { styled } from '@/../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '64px',
  gap: '8px',

  li: {
    color: '$purple',
    textAlign: 'center',
    fontFamily: '$roboto700',
    fontSize: '$small',
    lineHeight: '$medium',
  },

  '.pagination-container': {
    display: 'flex',
    alignItems: 'end',
    gap: '8px',
    paddingLeft: '0px',
    listStyle: 'none',
  },

  '.page-button': {
    a: {
      width: '32px',
      height: '32px',
      padding: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(92, 22, 197, 0.3)',
      },
    },
  },

  '.active-page-button': {
    a: {
      border: '1px solid rgba(92, 22, 197, 0.3)',
    },
  },

  '.break-ellipsis': {
    paddingBottom: '8px',
    a: {
      cursor: 'pointer',
    },
  },
});
