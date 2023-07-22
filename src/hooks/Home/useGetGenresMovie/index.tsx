import api from '@services/api';
import useSWR from 'swr';
import { GenresResponse } from './types';

async function fetchGetGenresMovie(): Promise<GenresResponse> {
  const { data } = await api.get<GenresResponse>('/genre/movie/list', {
    params: {
      language: 'pt-BR',
    },
  });

  return data;
}

export function useGetGenresMovie() {
  const { data, isLoading, error } = useSWR('genres-movie', () =>
    fetchGetGenresMovie()
  );

  return {
    data,
    isLoading,
    error,
  };
}
