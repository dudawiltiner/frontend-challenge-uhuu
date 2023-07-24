import * as S from './styles';
import { CharacterProps } from './types';

export default function Character({ content }: CharacterProps) {
  return <S.Text>{content}</S.Text>;
}
