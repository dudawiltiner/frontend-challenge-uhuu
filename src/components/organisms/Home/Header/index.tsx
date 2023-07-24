import Title from '@components/atoms/Home/Header/Title';
import Filter from '@components/molecules/Home/Header/Filter';
import * as S from './styles';
import { HeaderProps } from './types';

export default function Header({
  selectedIds,
  handleRemoveId,
  handleSelectId,
}: HeaderProps) {
  return (
    <S.HeaderContainer>
      <Title />
      <Filter
        selectedIds={selectedIds}
        handleRemoveId={handleRemoveId}
        handleSelectId={handleSelectId}
      />
    </S.HeaderContainer>
  );
}
