import { useMedia } from '@hooks/General/useMedia';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonPicture() {
  const { isBP640, isBP875 } = useMedia();
  return (
    <Skeleton
      width={isBP640 ? 186 : isBP875 ? 263 : 383}
      height={isBP640 ? 279 : isBP875 ? 384 : 574}
    />
  );
}
