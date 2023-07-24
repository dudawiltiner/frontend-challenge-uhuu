import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './styles';

export default function SkeletonResume() {
  return (
    <S.Container>
      <Skeleton width={220} height={38} />
      <Skeleton width={350} height={24} />
      <S.ScoreContainer>
        <Skeleton circle width={60} height={60} />
        <div>
          <Skeleton width={150} height={16} />
          <Skeleton width={100} height={16} />
        </div>
      </S.ScoreContainer>
      <S.OverviewContainer>
        <Skeleton width={100} height={18} />
        <Skeleton width={600} height={16} />
        <Skeleton width={600} height={16} />
        <Skeleton width={450} height={16} />
      </S.OverviewContainer>
      <S.CrewContainer>
        <S.Crew>
          <Skeleton width={150} height={18} />
          <Skeleton width={100} height={16} />
        </S.Crew>
        <S.Crew>
          <Skeleton width={150} height={18} />
          <Skeleton width={100} height={16} />
        </S.Crew>
        <S.Crew>
          <Skeleton width={150} height={18} />
          <Skeleton width={100} height={16} />
        </S.Crew>
        <S.Crew>
          <Skeleton width={150} height={18} />
          <Skeleton width={100} height={16} />
        </S.Crew>
        <S.Crew>
          <Skeleton width={150} height={18} />
          <Skeleton width={100} height={16} />
        </S.Crew>
      </S.CrewContainer>
    </S.Container>
  );
}
