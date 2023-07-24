import { useMedia } from '@hooks/General/useMedia';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './styles';

export default function SkeletonResume() {
  const { isBP640, isBP254 } = useMedia();
  return (
    <S.Container>
      <Skeleton style={{ maxWidth: 220 }} width={'100%'} height={38} />
      {isBP640 ? (
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
          <Skeleton width={isBP254 ? 100 : 150} height={16} />
          <Skeleton width={isBP254 ? 50 : 100} height={16} />
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
