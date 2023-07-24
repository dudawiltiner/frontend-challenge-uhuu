import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

export default function Logo() {
  const router = useRouter();
  const isBP1 = useMediaQuery({
    query: '(max-width:640px)',
  });
  return (
    <Image
      src={'/logo.svg'}
      style={{ cursor: 'pointer' }}
      priority
      alt={'Logo Image TMDB'}
      width={isBP1 ? 140 : 185}
      height={isBP1 ? 20 : 24}
      onClick={() => router.push('/')}
    />
  );
}
