import { useMedia } from '@hooks/General/useMedia';
import { VideoProps } from './types';

export default function YoutubeVideo({ videoKey }: VideoProps) {
  const { isBP540, isBP700, isBP860, isBP960 } = useMedia();
  const width = isBP540
    ? '100%'
    : isBP700
    ? '500'
    : isBP860
    ? '650'
    : isBP960
    ? '807'
    : '907';
  const height = isBP540
    ? '260'
    : isBP700
    ? '300'
    : isBP860
    ? '367'
    : isBP960
    ? '457'
    : '510';

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoKey}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
