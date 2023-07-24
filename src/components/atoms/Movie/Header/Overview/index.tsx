import { useMedia } from '@hooks/General/useMedia';
import { limitString } from '@utils/limitString';
import * as S from './styles';
import { OverviewProps } from './types';

export default function Overview({ content }: OverviewProps) {
  const { isBP1000, isBP640, isBP896, isBP950 } = useMedia();
  const max_string = isBP640
    ? 400
    : isBP896
    ? 160
    : isBP950
    ? 200
    : isBP1000
    ? 336
    : 390;

  return (
    <S.Box>
      <S.Title>Sinopse</S.Title>
      <S.Text>
        {content.length > max_string
          ? limitString(content, max_string)
          : content}
      </S.Text>
    </S.Box>
  );
}
