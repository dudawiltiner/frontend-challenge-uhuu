import Crew from '@components/atoms/Movie/Header/CrewsList/Crew';
import * as S from './styles';
import { CrewsListProps } from './types';

export default function CrewsList({ crews }: CrewsListProps) {
  return (
    <S.Container role="list">
      {crews.map((crew) => (
        <Crew key={crew.id} name={crew?.name} job={crew?.job} />
      ))}
    </S.Container>
  );
}
