import * as S from './styles';
import { TitleProps } from './types';

export default function TopicTitle({ name }: TitleProps) {
  return <S.Text>{name}</S.Text>;
}
