import * as S from './styles';
import { PictureProps } from './types';

export default function Picture({ image }: PictureProps) {
  return (
    <S.ImageStyle
      style={{
        background: `url(${image}), lightgray 50% / cover no-repeat`,
      }}
    />
  );
}
