import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from 'react-responsive';

export default function SkeletonPicture() {
  const isBP1 = useMediaQuery({
    query: '(max-width:875px)',
  });
  const isBP2 = useMediaQuery({
    query: '(max-width:640px)',
  });

  return (
    <Skeleton
      width={isBP2 ? 186 : isBP1 ? 263 : 383}
      height={isBP2 ? 279 : isBP1 ? 384 : 574}
    />
  );
}
