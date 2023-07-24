import Menu from '@components/molecules/General/Menu';
import Cast from '@components/organisms/Movie/Cast';
import Header from '@components/organisms/Movie/Header';
import Recommendations from '@components/organisms/Movie/Recommendations';
import Trailer from '@components/organisms/Movie/Trailer';
import { useGetMovieDetail } from '@hooks/Home/useGetMovieDetail';
import { convertMinutesToHoursMinutes } from '@utils/convertMinutesToHoursMinutes';
import { useMediaQuery } from 'react-responsive';
import { MovieProps } from './types';

export default function MovieTemplate({ movieId }: MovieProps) {
  const { data, isLoading } = useGetMovieDetail(movieId);
  const isBP1 = useMediaQuery({
    query: '(max-width:950px)',
  });
  const isBP2 = useMediaQuery({
    query: '(max-width:640px)',
  });
  const releaseDate = new Date(data?.release_date ?? '2023');
  const formattedDate = (date: Date) =>
    date ? new Intl.DateTimeFormat('pt-BR').format(date) : '';
  const title = `${data?.title} (${releaseDate.getFullYear()})`;
  const releaseBR = data?.release_dates?.results.find(
    (el) => el.iso_3166_1 === 'BR'
  )?.release_dates[0];
  const certificationBR = releaseBR?.certification ?? 16;
  const releaseDateBR = new Date(
    releaseBR?.release_date ?? data?.release_date ?? '2023'
  );
  releaseDateBR.setDate(releaseDateBR.getDate() + 1);
  const genres = data?.genres.map((genre) => genre.name).join(', ');
  const description = isBP2 ? (
    <div>
      <p>{`${certificationBR} anos`}</p>
      <p>{`${formattedDate(releaseDateBR)} ${
        releaseBR?.release_date ? '(BR)' : ''
      }`}</p>
      <p>{`${genres}`}</p>
      <p>{`${convertMinutesToHoursMinutes(data?.runtime ?? 0)}`}</p>
    </div>
  ) : (
    `${certificationBR} anos • ${formattedDate(releaseDateBR)} ${
      releaseBR?.release_date ? '(BR)' : ''
    } • ${genres} • ${convertMinutesToHoursMinutes(data?.runtime ?? 0)}`
  );
  const userScore = Math.round((data?.vote_average ?? 0) * 10);
  const selectedCrews = ['Characters', 'Screenplay', 'Director'];

  const filteredCrews =
    data?.credits?.crew
      .filter((crew) => selectedCrews.includes(crew.job))
      .slice(0, isBP1 ? 4 : 6) ?? [];
  const videoTrailerKey =
    data?.videos.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    )?.key ?? '';
  return (
    <>
      <Menu />
      <Header
        image={data?.poster_path ?? ''}
        title={title}
        description={description}
        score={userScore}
        overview={data?.overview ?? ''}
        crews={filteredCrews}
        isLoading
      />
      <Cast cast={data?.credits?.cast ?? []} isLoading={isLoading} />
      <Trailer videoKey={videoTrailerKey} isLoading={isLoading} />
      <Recommendations
        recommendationsList={data?.recommendations?.results}
        isLoading={isLoading}
      />
    </>
  );
}
