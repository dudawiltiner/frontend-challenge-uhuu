import { dateFormatter } from '@utils/dateFormatter';
import * as S from './styles';
import { DateProps } from './types';

export default function ({ value }: DateProps) {
  const date = new Date(value);
  return <S.Text>{value ? dateFormatter(date) : ''}</S.Text>;
}
