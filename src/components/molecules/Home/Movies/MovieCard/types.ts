import { MovieData } from '@hooks/Home/useGetPopularMovie/types';
import { Recommendation } from '@hooks/Movie/useGetMovieDetail/types';

export interface MovieCardProps {
  movie: MovieData | Recommendation;
}
