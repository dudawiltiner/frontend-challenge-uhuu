import { useMedia } from '@hooks/General/useMedia';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();
  const { isBP640 } = useMedia();

  return (
    <Image
      src={'/logo.svg'}
      style={{ cursor: 'pointer' }}
      priority
      alt={'Logo Image TMDB'}
      width={isBP640 ? 140 : 185}
      height={isBP640 ? 20 : 24}
      onClick={() => router.push('/')}
    />
  );
}
