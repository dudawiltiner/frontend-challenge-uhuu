import api from '@services/api';
import useSWR from 'swr';
import { MoviesParams, MoviesResponse } from './types';

async function fetchGetPopularMovies({
  page,
  genreIds,
}: MoviesParams): Promise<MoviesResponse> {
  const { data } = await api.get<MoviesResponse>(
    `/movie/popular?with_genres=${genreIds}`,
    {
      params: {
        page,
        language: 'pt-BR',
      },
    }
  );

  return data;
}

export function useGetPopularMovies({ page, genreIds }: MoviesParams) {
  const { data, isLoading, error } = useSWR(['movies', page, genreIds], () =>
    fetchGetPopularMovies({ page, genreIds })
  );

  return {
    data,
    isLoading,
    error,
  };
}
