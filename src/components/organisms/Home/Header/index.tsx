import Title from '@components/atoms/Home/Header/Title';
import Filter from '@components/molecules/Home/Header/Filter/ChipsList';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <Title />
      <Filter />
    </S.Container>
  );
}
