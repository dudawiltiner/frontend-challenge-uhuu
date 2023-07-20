import Date from '@components/atoms/Home/Movies/MovieCard/Date';
import Picture from '@components/atoms/Home/Movies/MovieCard/Picture';
import Title from '@components/atoms/Home/Movies/MovieCard/Title';
import * as S from './styles';
export default function MovieCard() {
  return (
    <S.Box>
      <Picture />
      <S.Description>
        <Title name="Um nome de filme" />
        <Date value="20 NOV 2023" />
      </S.Description>
    </S.Box>
  );
}
