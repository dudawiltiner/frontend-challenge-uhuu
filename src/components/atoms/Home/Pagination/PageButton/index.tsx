import * as S from './styles';
import { PageButtonProps } from './types';

export default function PageButton({ children }: PageButtonProps) {
  return (
    <S.PageSelect type="button">
      <S.Text>{children}</S.Text>
    </S.PageSelect>
  );
}
