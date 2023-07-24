import { Crew } from '@hooks/Home/useGetMovieDetail/types';

export interface HeaderProps {
  image: string;
  title: string;
  description: string | React.ReactNode;
  score: number;
  overview: string;
  crews: Crew[];
  isLoading: boolean;
}
