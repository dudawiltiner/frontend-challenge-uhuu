import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from 'react-responsive';
import * as S from './styles';

export default function SkeletonResume() {
  const isBP1 = useMediaQuery({
    query: '(max-width:640px)',
  });

  const isBP2 = useMediaQuery({
    query: '(max-width:254px)',
  });
  return (
    <S.Container>
      <Skeleton style={{ maxWidth: 220 }} width={'100%'} height={38} />
      {isBP1 ? (
        <div>
          <Skeleton style={{ maxWidth: 100 }} width={'100%'} height={14} />
          <Skeleton style={{ maxWidth: 150 }} width={'100%'} height={14} />
          <Skeleton style={{ maxWidth: 250 }} width={'100%'} height={14} />
          <Skeleton style={{ maxWidth: 200 }} width={'100%'} height={14} />
        </div>
      ) : (
        <Skeleton style={{ maxWidth: 350 }} width={'100%'} height={24} />
      )}
      <S.ScoreContainer>
        <Skeleton circle width={60} height={60} />
        <div>
          <Skeleton width={isBP2 ? 100 : 150} height={16} />
          <Skeleton width={isBP2 ? 50 : 100} height={16} />
        </div>
      </S.ScoreContainer>
      <S.OverviewContainer>
        <Skeleton width={100} height={18} />
        <Skeleton style={{ maxWidth: 600 }} width={'100%'} height={16} />
        <Skeleton style={{ maxWidth: 600 }} width={'100%'} height={16} />
        <Skeleton style={{ maxWidth: 450 }} width={'100%'} height={16} />
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
