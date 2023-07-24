import Character from '@components/atoms/Movie/Cast/PersonCard/Character';
import Picture from '@components/atoms/Movie/Cast/PersonCard/Picture';
import Title from '@components/atoms/Movie/Cast/PersonCard/Title';
import * as S from './styles';
import { PersonCardProps } from './types';

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <S.Box role="listitem">
      <Picture
        image={`https://image.tmdb.org/t/p/w220_and_h330_face${person?.profile_path}`}
      />
      <S.Description>
        <Title name={person?.original_name} />
        <Character content={person?.character} />
      </S.Description>
    </S.Box>
  );
}
