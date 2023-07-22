import * as S from './styles';
import { ChipProps } from './types';
export default function Chip({ name, selected, handleClick }: ChipProps) {
  return (
    <S.GenreButton type="button" selected={selected} onClick={handleClick}>
      <S.Text selected={selected}>{name}</S.Text>
      {selected && <S.CloseIcon />}
    </S.GenreButton>
  );
}
