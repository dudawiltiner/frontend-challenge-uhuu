import * as S from './styles';

export default function Picture() {
  return (
    <S.ImageStyle
      style={{
        background: `url(example-image.svg), lightgray 50% / cover no-repeat`,
      }}
    />
  );
}
