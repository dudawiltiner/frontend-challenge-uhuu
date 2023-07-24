import { Recommendation } from '@hooks/Home/useGetMovieDetail/types';

export interface RecommendationsProps {
  recommendationsList: Recommendation[] | undefined;
  isLoading: boolean;
}
