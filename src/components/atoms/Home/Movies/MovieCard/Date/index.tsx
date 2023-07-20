import * as S from './styles';
import { DateProps } from './types';

export default function Date({ value }: DateProps) {
  return <S.Text>{value}</S.Text>;
}
