import * as S from './styles';
import { DescriptionProps } from './types';

export default function Description({ content }: DescriptionProps) {
  return <S.Text>{content}</S.Text>;
}
