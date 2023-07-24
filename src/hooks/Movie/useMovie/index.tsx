import { useMedia } from '@hooks/General/useMedia';
import { convertMinutesToHoursMinutes } from '@utils/convertMinutesToHoursMinutes';
import { formattedDate } from '@utils/dateFormatter';
import { MovieResponse } from '../useGetMovieDetail/types';

export const useMovie = (data: MovieResponse | undefined) => {
  const { isBP950, isBP640 } = useMedia();
  const releaseBR = data?.release_dates?.results.find(
    (el) => el.iso_3166_1 === 'BR'
  )?.release_dates[0];

  // Original Realese Date
  const releaseDate = new Date(data?.release_date ?? '2023');

  // Title Movie
  const title = `${data?.title} (${releaseDate.getFullYear()})`;

  // Certification BR
  const certificationBR = releaseBR?.certification ?? '';

  // Brazil Realese Date
  const releaseDateBR = new Date(
    releaseBR?.release_date ?? data?.release_date ?? '2023'
  );
  releaseDateBR.setDate(releaseDateBR.getDate() + 1);

  // Genres Movie
  const genres = data?.genres.map((genre) => genre.name).join(', ');

  // Description Movie
  const certificationValid = certificationBR.includes('L')
    ? 'Livre'
    : `${certificationBR} anos`;
  const formattedCertificationBR =
    certificationBR === '' ? 'Sem classificação' : certificationValid;
  const formattedReleaseDate = `${formattedDate(releaseDateBR)} ${
    releaseBR?.release_date ? '(BR)' : ''
  }`;
  const runtime = convertMinutesToHoursMinutes(data?.runtime ?? 0);
  const descriptionformatOne = (
    <div>
      <p>{formattedCertificationBR}</p>
      <p>{formattedReleaseDate}</p>
      <p>{genres}</p>
      <p>{runtime}</p>
    </div>
  );
  const descriptionformatTwo = `${formattedCertificationBR} • ${formattedReleaseDate} • ${genres} • ${runtime}`;
  const description = isBP640 ? descriptionformatOne : descriptionformatTwo;

  // User Score Movie
  const userScore = Math.round((data?.vote_average ?? 0) * 10);

  // Crew List
  const selectedCrews = ['Characters', 'Screenplay', 'Director'];
  const filteredCrews =
    data?.credits?.crew
      .filter((crew) => selectedCrews.includes(crew.job))
      .slice(0, isBP950 ? 4 : 6) ?? [];

  // Trailer
  const videoTrailerKey =
    data?.videos.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    )?.key ?? '';

  // Cast List Movie
  const castList = data?.credits?.cast ?? [];

  // Recommendations Movie
  const recommendationsMovie = data?.recommendations?.results;

  // Image Movie
  const imageMovie = data?.poster_path ?? '';

  // Overview Movie
  const overview = data?.overview ?? '';

  return {
    releaseDateBR,
    title,
    description,
    userScore,
    filteredCrews,
    videoTrailerKey,
    castList,
    recommendationsMovie,
    imageMovie,
    overview,
  };
};
