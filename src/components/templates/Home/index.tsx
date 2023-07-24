'use client';
import Menu from '@components/molecules/General/Menu';
import Pagination from '@components/molecules/Home/Movies/Pagination';
import Header from '@components/organisms/Home/Header';
import Movies from '@components/organisms/Home/Movies';
import { useGetGenresMovie } from '@hooks/Home/useGetGenresMovie';
import { useGetPopularMovies } from '@hooks/Home/useGetPopularMovie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as S from './styles';

export default function HomeTemplate() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data, isLoading } = useGetPopularMovies({
    page: page + 1,
    genreIds: selectedGenres,
  });
  useGetGenresMovie();
  // A API apenas permite chegar até 500 páginas
  const MAX_TOTAL_PAGES = 500;
  const totalPagesAPI = data?.total_pages ?? 1;

  const handleSelectId = (id: number) => {
    setPage(0);
    setSelectedGenres([...selectedGenres, id]);
    router.push(`?genre=${[...selectedGenres, id]}&page=${1}`);
  };

  const handleRemoveId = (id: number) => {
    setPage(0);
    const filteredSelectIds = selectedGenres.filter((genre) => genre !== id);
    setSelectedGenres([...filteredSelectIds]);
    router.push(`?genre=${filteredSelectIds}&page=${1}`);
  };

  const handlePage = (value: number) => {
    setPage(value);
    router.push(`?genre=${selectedGenres}&page=${value + 1}`);
  };

  useEffect(() => {
    if (data?.total_pages && data?.total_pages !== totalPages) {
      const newTotalPages =
        totalPagesAPI > MAX_TOTAL_PAGES ? MAX_TOTAL_PAGES : totalPagesAPI;
      setTotalPages(newTotalPages);
    }
  }, [data?.total_pages]);

  useEffect(() => {
    const genres = searchParams.get('genre');
    const page = searchParams.get('page');
    const newGenres = genres ? genres.split(',').map((el) => Number(el)) : [];
    setSelectedGenres(newGenres);
    setPage(page ? Number(page) - 1 : 0);
  }, []);

  return (
    <>
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
    </>
  );
}
