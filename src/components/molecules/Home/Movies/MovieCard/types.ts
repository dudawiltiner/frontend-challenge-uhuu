import { Recommendation } from '@hooks/Home/useGetMovieDetail/types';
import { MovieData } from '@hooks/Home/useGetPopularMovie/types';

export interface MovieCardProps {
  movie: MovieData | Recommendation;
}
