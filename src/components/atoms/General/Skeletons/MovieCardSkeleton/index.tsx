import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './styles';

export default function MovieCardSkeleton() {
  return (
    <S.Container role="listitem">
      <Skeleton width={176} height={264} />
      <S.DescriptionBox>
        <Skeleton width={136} height={20} />
        <Skeleton width={79} height={18} />
      </S.DescriptionBox>
    </S.Container>
  );
}
