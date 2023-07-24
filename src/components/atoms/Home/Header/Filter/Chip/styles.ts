import { styled } from '@/../stitches.config';
import { IoMdCloseCircle } from 'react-icons/io';

export const GenreButton = styled('button', {
  display: 'inline-flex',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$white',
  borderRadius: '4px',
  height: '30px',
  gap: '8px',
  cursor: 'pointer',
  border: 'none',

  variants: {
    selected: {
      true: {
        backgroundColor: '$orange',
      },
    },
  },
});

export const Text = styled('p', {
  fontFamily: '$roboto700',
  fontSize: '$small',
  lineHeight: '$xmedium',
  textAlign: 'center',
  color: '$gray600',

  variants: {
    selected: {
      true: {
        color: 'white',
      },
    },
  },

  '@bp3': {
    fontSize: '$xsmall',
    lineHeight: '$medium',
  },
});

export const CloseIcon = styled(IoMdCloseCircle, {
  width: '20px',
  height: '20px',
  color: '$white',
});
