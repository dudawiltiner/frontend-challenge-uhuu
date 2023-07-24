'use client';

import MovieTemplate from '@components/templates/Movie';
import { MovieParams } from './types';

export default function Movie({ params }: { params: MovieParams }) {
  return <MovieTemplate movieId={params.movieId} />;
}
