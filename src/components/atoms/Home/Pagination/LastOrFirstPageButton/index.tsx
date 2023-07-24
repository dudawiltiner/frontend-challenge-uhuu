import * as S from './styles';
import { LastOrFirstButtonProps } from './types';

export default function LastOrFirstPageButton({
  name,
  handleClick,
}: LastOrFirstButtonProps) {
  return (
    <S.LastPageSelect type="button" onClick={handleClick}>
      {name}
    </S.LastPageSelect>
  );
}
