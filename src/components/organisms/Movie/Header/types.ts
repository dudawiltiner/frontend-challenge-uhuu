import { Crew } from '@hooks/Movie/useGetMovieDetail/types';

export interface HeaderProps {
  image: string;
  title: string;
  description: string | React.ReactNode;
  score: number;
  overview: string;
  crews: Crew[];
  isLoading: boolean;
}
