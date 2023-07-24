'use client';
import Menu from '@components/molecules/General/Menu';
import Pagination from '@components/molecules/Home/Movies/Pagination';
import Header from '@components/organisms/Home/Header';
import Movies from '@components/organisms/Home/Movies';
import { useHome } from '@hooks/Home/useHome';
import * as S from './styles';

export default function HomeTemplate() {
  const {
    page,
    selectedGenres,
    handleSelectId,
    handleRemoveId,
    handlePage,
    data,
    isLoading,
    totalPages,
  } = useHome();

  return (
    <main>
      <Menu />
      <Header
        selectedIds={selectedGenres}
        handleRemoveId={handleRemoveId}
        handleSelectId={handleSelectId}
      />
      <Movies isLoading={isLoading} moviesList={data?.results} />
      {data?.results?.length === 0 && (
        <S.NoDataText>Nenhum filme foi encontrado</S.NoDataText>
      )}
      <Pagination handlePage={handlePage} page={page} total={totalPages} />
    </main>
  );
}
