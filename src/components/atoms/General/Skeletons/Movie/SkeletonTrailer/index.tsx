import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from 'react-responsive';

export default function SkeletonTrailer() {
  const isBP1 = useMediaQuery({
    query: '(max-width:960px)',
  });

  const isBP2 = useMediaQuery({
    query: '(max-width:860px)',
  });

  const isBP3 = useMediaQuery({
    query: '(max-width:700px)',
  });

  const isBP4 = useMediaQuery({
    query: '(max-width:540px)',
  });

  const isBP5 = useMediaQuery({
    query: '(max-width:510px)',
  });

  return (
    <Skeleton
      width={
        isBP5
          ? 400
          : isBP4
          ? 480
          : isBP3
          ? 500
          : isBP2
          ? 650
          : isBP1
          ? 807
          : 907
      }
      height={isBP4 ? 260 : isBP3 ? 300 : isBP2 ? 367 : isBP1 ? 457 : 510}
    />
  );
}
