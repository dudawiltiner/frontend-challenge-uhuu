import * as S from './styles';
import { ChipProps } from './types';
export default function Chip({ name, selected }: ChipProps) {
  return (
    <S.Box selected={selected}>
      <S.Text selected={selected}>{name}</S.Text>
      {selected && <S.CloseIcon />}
    </S.Box>
  );
}
