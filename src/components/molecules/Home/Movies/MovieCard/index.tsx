import Date from '@components/atoms/Home/Movies/MovieCard/Date';
import Picture from '@components/atoms/Home/Movies/MovieCard/Picture';
import Title from '@components/atoms/Home/Movies/MovieCard/Title';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import { MovieCardProps } from './types';

export default function MovieCard({ movie }: MovieCardProps) {
  const rounter = useRouter();
  return (
    <S.Box role="listitem" onClick={() => rounter.push(`/movie/${movie.id}`)}>
      <Picture
        image={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
      />
      <S.Description>
        <Title name={movie.title} />
        <Date value={movie.release_date} />
      </S.Description>
    </S.Box>
  );
}
