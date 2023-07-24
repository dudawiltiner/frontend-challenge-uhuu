import { Recommendation } from '@hooks/Movie/useGetMovieDetail/types';

export interface RecommendationsProps {
  recommendationsList: Recommendation[] | undefined;
  isLoading: boolean;
}
