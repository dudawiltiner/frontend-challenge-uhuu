import SkeletonTopicTitle from '@components/atoms/General/Skeletons/Movie/SkeletonTopicTitle';
import MovieCardSkeleton from '@components/atoms/General/Skeletons/MovieCardSkeleton';
import TopicTitle from '@components/molecules/Home/Movie/TopicTitle';
import MovieCard from '@components/molecules/Home/Movies/MovieCard';
import * as S from './styles';
import { RecommendationsProps } from './types';

export default function Recommendations({
  recommendationsList,
  isLoading,
}: RecommendationsProps) {
  const loadingArray = new Array(20).fill(null);
  return (
    <S.Container>
      {isLoading ? <SkeletonTopicTitle /> : <TopicTitle name="Recomendações" />}
      <S.Box>
        {isLoading
          ? loadingArray.map((_, idx) => <MovieCardSkeleton key={idx} />)
          : recommendationsList?.map((recommendation, idx) => (
              <MovieCard key={idx} movie={recommendation} />
            ))}
      </S.Box>
    </S.Container>
  );
}
