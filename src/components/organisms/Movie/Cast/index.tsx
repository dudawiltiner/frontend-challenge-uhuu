import SkeletonCast from '@components/atoms/General/Skeletons/Movie/SkeletonCast';
import SkeletonTopicTitle from '@components/atoms/General/Skeletons/Movie/SkeletonTopicTitle';
import PersonCard from '@components/molecules/Home/Movie/Cast/PersonCard';
import TopicTitle from '@components/molecules/Home/Movie/TopicTitle';
import * as S from './styles';
import { CastProps } from './types';

export default function Cast({ cast, isLoading }: CastProps) {
  return (
    <S.Container>
      {isLoading ? (
        <SkeletonTopicTitle />
      ) : (
        <TopicTitle name="Elenco Original" />
      )}
      {isLoading ? (
        <SkeletonCast />
      ) : (
        <S.Box>
          {cast.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </S.Box>
      )}
    </S.Container>
  );
}
