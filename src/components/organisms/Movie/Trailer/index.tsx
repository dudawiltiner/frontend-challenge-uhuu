import SkeletonTopicTitle from '@components/atoms/General/Skeletons/Movie/SkeletonTopicTitle';
import SkeletonTrailer from '@components/atoms/General/Skeletons/Movie/SkeletonTrailer';
import TopicTitle from '@components/molecules/Home/Movie/TopicTitle';
import YoutubeVideo from '@components/molecules/Home/Movie/Trailer/YoutubeVideo';
import * as S from './styles';
import { TrailerProps } from './types';

export default function Trailer({ videoKey, isLoading }: TrailerProps) {
  return (
    <S.Container>
      {isLoading ? <SkeletonTopicTitle /> : <TopicTitle name="Trailer" />}
      {isLoading ? <SkeletonTrailer /> : <YoutubeVideo videoKey={videoKey} />}
    </S.Container>
  );
}
