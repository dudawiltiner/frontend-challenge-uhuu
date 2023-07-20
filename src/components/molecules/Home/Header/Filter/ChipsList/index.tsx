import Chip from '@components/atoms/Home/Header/Filter/Chip';
import Title from '@components/atoms/Home/Header/Filter/Title';
import * as S from './styles';

export default function Filter() {
  return (
    <S.Container>
      <Title />
      <S.BoxListChips>
        <Chip name="76yytyt" selected={false} />
        <Chip name="76yytyt" selected={true} />
        <Chip name="76yytyt" selected={true} />
        <Chip name="76vyytyt" selected={true} />
        <Chip name="76vyytyt" selected={true} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
        <Chip name="76vyytyt" selected={false} />
      </S.BoxListChips>
    </S.Container>
  );
}
