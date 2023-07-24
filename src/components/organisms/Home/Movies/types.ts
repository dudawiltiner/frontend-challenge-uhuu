import { MovieData } from '@hooks/Home/useGetPopularMovie/types';

export interface MoviesProps {
  moviesList: MovieData[] | undefined;
  isLoading: boolean;
}
