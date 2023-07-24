import Description from '@components/atoms/Movie/Header/Description';
import Overview from '@components/atoms/Movie/Header/Overview';
import Title from '@components/atoms/Movie/Header/Title';
import UserScore from '@components/atoms/Movie/Header/UserScore';
import CrewsList from '../CrewsList';
import * as S from './styles';
import { ResumeProps } from './types';

export default function Resume({
  title,
  description,
  score,
  overview,
  crews,
}: ResumeProps) {
  return (
    <S.Container>
      <Title name={title} />
      <Description content={description} />
      <UserScore percentage={score} />
      <Overview content={overview} />
      <CrewsList crews={crews} />
    </S.Container>
  );
}
