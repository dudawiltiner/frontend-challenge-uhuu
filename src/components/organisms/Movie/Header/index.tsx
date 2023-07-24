import SkeletonPicture from '@components/atoms/General/Skeletons/Movie/Header/SkeletonPicture';
import SkeletonResume from '@components/atoms/General/Skeletons/Movie/Header/SkeletonResume';
import Picture from '@components/atoms/Movie/Header/Picture';
import Resume from '@components/molecules/Home/Movie/Header/Resume';
import * as S from './styles';
import { HeaderProps } from './types';

export default function Header({
  image,
  title,
  description,
  score,
  overview,
  crews,
  isLoading,
}: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.ImageBox>
        {isLoading ? (
          <SkeletonPicture />
        ) : (
          <Picture
            image={`https://image.tmdb.org/t/p/w600_and_h900_face${image}`}
          />
        )}
      </S.ImageBox>
      {isLoading ? (
        <SkeletonResume />
      ) : (
        <Resume
          title={title}
          description={description}
          score={score}
          overview={overview}
          crews={crews}
        />
      )}
    </S.HeaderContainer>
  );
}
