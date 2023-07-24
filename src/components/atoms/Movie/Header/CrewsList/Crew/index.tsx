import * as S from './styles';
import { CrewProps } from './types';

export default function Crew({ name, job }: CrewProps) {
  return (
    <S.Box>
      <S.Title>{name}</S.Title>
      <S.Text>{job}</S.Text>
    </S.Box>
  );
}
