import { useMediaQuery } from 'react-responsive';
import { VideoProps } from './types';

export default function YoutubeVideo({ videoKey }: VideoProps) {
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

  return (
    <iframe
      width={
        isBP4 ? '100%' : isBP3 ? '500' : isBP2 ? '650' : isBP1 ? '807' : '907'
      }
      height={
        isBP4 ? '260' : isBP3 ? '300' : isBP2 ? '367' : isBP1 ? '457' : '510'
      }
      src={`https://www.youtube.com/embed/${videoKey}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
