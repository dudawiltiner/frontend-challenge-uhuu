import Header from '@components/organisms/Home/Header';
import Movies from '@components/organisms/Home/Movies';
import * as S from './styles';

export default function HomeTemplate() {
  return (
    <S.Container>
      <Header />
      <Movies />
    </S.Container>
  );
}
