import Menu from '@components/molecules/General/Menu';
import Cast from '@components/organisms/Movie/Cast';
import Header from '@components/organisms/Movie/Header';
import Recommendations from '@components/organisms/Movie/Recommendations';
import Trailer from '@components/organisms/Movie/Trailer';
import { useGetMovieDetail } from '@hooks/Movie/useGetMovieDetail';
import { useMovie } from '@hooks/Movie/useMovie';
import { MovieProps } from './types';

export default function MovieTemplate({ movieId }: MovieProps) {
  const { data, isLoading } = useGetMovieDetail(movieId);
  const {
    title,
    description,
    userScore,
    filteredCrews,
    videoTrailerKey,
    castList,
    recommendationsMovie,
    imageMovie,
    overview,
  } = useMovie(data);

  return (
    <main>
      <Menu />
      <Header
        image={imageMovie}
        title={title}
        description={description}
        score={userScore}
        overview={overview}
        crews={filteredCrews}
        isLoading={isLoading}
      />
      <Cast cast={castList} isLoading={isLoading} />
      <Trailer videoKey={videoTrailerKey} isLoading={isLoading} />
      <Recommendations
        recommendationsList={recommendationsMovie}
        isLoading={isLoading}
      />
    </main>
  );
}
