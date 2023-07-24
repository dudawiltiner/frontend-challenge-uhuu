import Image from 'next/image';

export default function Logo() {
  return (
    <Image src={'./logo.svg'} alt={'Logo Image TMDB'} width={185} height={24} />
  );
}
