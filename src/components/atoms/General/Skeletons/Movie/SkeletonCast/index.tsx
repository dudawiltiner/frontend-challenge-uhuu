import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './styles';

export default function SkeletonCast() {
  return (
    <S.Box>
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
      <Skeleton width={181} height={336} />
    </S.Box>
  );
}
