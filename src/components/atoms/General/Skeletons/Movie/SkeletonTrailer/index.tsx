import { useMedia } from '@hooks/General/useMedia';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonTrailer() {
  const { isBP510, isBP540, isBP700, isBP860, isBP960 } = useMedia();
  const width = isBP510
    ? 400
    : isBP540
    ? 480
    : isBP700
    ? 500
    : isBP860
    ? 650
    : isBP960
    ? 807
    : 907;
  const height = isBP540
    ? 260
    : isBP700
    ? 300
    : isBP860
    ? 367
    : isBP960
    ? 457
    : 510;

  return <Skeleton width={width} height={height} />;
}
