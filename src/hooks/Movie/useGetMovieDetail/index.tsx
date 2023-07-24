import api from '@services/api';
import useSWR from 'swr';
import { MovieResponse } from './types';

async function fetchGetMovieDetail(movieId: string): Promise<MovieResponse> {
  const { data } = await api.get<MovieResponse>(`/movie/${movieId}`, {
    params: {
      language: 'pt-BR',
      append_to_response:
        'videos,credits,runtime,recommendations,release_dates',
    },
  });

  return data;
}

export function useGetMovieDetail(movieId: string) {
  const { data, isLoading, error } = useSWR(['movie', movieId], () =>
    fetchGetMovieDetail(movieId)
  );

  return {
    data,
    isLoading,
    error,
  };
}
