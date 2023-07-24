import Chip from '@components/atoms/Home/Header/Filter/Chip';
import Title from '@components/atoms/Home/Header/Filter/Title';
import { useGetGenresMovie } from '@hooks/Home/useGetGenresMovie';
import * as S from './styles';
import { FilterProps } from './types';

export default function Filter({
  selectedIds,
  handleRemoveId,
  handleSelectId,
}: FilterProps) {
  const { data } = useGetGenresMovie();

  const isSelected = (id: number) => selectedIds.includes(id);
  const handleClick = (id: number) => {
    if (isSelected(id)) {
      handleRemoveId(id);
      return;
    }
    handleSelectId(id);
  };
  return (
    <S.Container>
      <Title />
      <S.BoxListChips>
        {data?.genres.map((genre) => (
          <Chip
            key={genre.id}
            name={genre.name}
            selected={isSelected(genre.id)}
            handleClick={() => handleClick(genre.id)}
          />
        ))}
      </S.BoxListChips>
    </S.Container>
  );
}
