import { styled } from '@/../stitches.config';
import { IoMdCloseCircle } from 'react-icons/io';

export const Box = styled('div', {
  display: 'inline-flex',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$white',
  borderRadius: '4px',
  height: '30px',
  gap: '8px',

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
  lineHeight: '$medium',
  textAlign: 'center',
  color: '$gray600',

  variants: {
    selected: {
      true: {
        color: 'white',
      },
    },
  },
});

export const CloseIcon = styled(IoMdCloseCircle, {
  width: '20px',
  height: '20px',
  color: '$white',
});
