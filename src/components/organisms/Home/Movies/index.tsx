import MovieCardSkeleton from '@components/atoms/General/Skeletons/MovieCardSkeleton';
import MovieCard from '@components/molecules/Home/Movies/MovieCard';
import * as S from './styles';
import { MoviesProps } from './types';

export default function Movies({ moviesList, isLoading }: MoviesProps) {
  const loadingArray = new Array(20).fill(null);
  return (
    <S.Container>
      <S.Box>
        {isLoading
          ? loadingArray.map((_, idx) => <MovieCardSkeleton key={idx} />)
          : moviesList?.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
      </S.Box>
    </S.Container>
  );
}
