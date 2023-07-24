import { limitString } from '@utils/limitString';
import { useMediaQuery } from 'react-responsive';
import * as S from './styles';
import { OverviewProps } from './types';

export default function Overview({ content }: OverviewProps) {
  const isBP1 = useMediaQuery({
    query: '(max-width:1000px)',
  });

  const isBP2 = useMediaQuery({
    query: '(max-width:950px)',
  });

  const isBP3 = useMediaQuery({
    query: '(max-width:896px)',
  });

  const isBP4 = useMediaQuery({
    query: '(max-width:640px)',
  });

  const max_string = isBP4
    ? 400
    : isBP3
    ? 160
    : isBP2
    ? 200
    : isBP1
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
