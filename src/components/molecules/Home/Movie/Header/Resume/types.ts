import { Crew } from '@hooks/Home/useGetMovieDetail/types';

export interface ResumeProps {
  title: string;
  description: string | React.ReactNode;
  score: number;
  overview: string;
  crews: Crew[];
}
