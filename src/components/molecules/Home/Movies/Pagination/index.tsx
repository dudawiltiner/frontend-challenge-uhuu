import PageButton from '@components/atoms/Home/Pagination/PageButton';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';
import LastOrFirstPageButton from '../../../../atoms/Home/Pagination/LastOrFirstPageButton';
import * as S from './styles';
import { PaginationProps } from './types';

export default function Pagination({
  handlePage,
  page,
  total,
}: PaginationProps) {
  const isBP3 = useMediaQuery({
    query: '(max-width:640px)',
  });
  const isXBP3 = useMediaQuery({
    query: '(max-width:746px)',
  });
  const isXXBP3 = useMediaQuery({
    query: '(max-width:524px)',
  });

  const isXBP5 = useMediaQuery({
    query: '(min-width:380px)',
  });

  const showTheLastPageButton = total !== 1 && isXBP5;
  const showTheFirstPageButton = total !== 1 && page !== 0 && isXBP5;

  return (
    <S.Container>
      {showTheFirstPageButton && (
        <LastOrFirstPageButton
          handleClick={() => handlePage(0)}
          name={'Primeira'}
        />
      )}
      <ReactPaginate
        pageCount={total}
        pageRangeDisplayed={isXBP3 ? 1 : 2}
        marginPagesDisplayed={isXXBP3 ? 0 : isBP3 ? 1 : 2}
        onPageChange={(value) => handlePage(value.selected)}
        forcePage={page}
        pageClassName="page-button"
        activeClassName="active-page-button"
        className="pagination-container"
        breakClassName="break-ellipsis"
        previousLabel={
          page === 0 ? (
            <></>
          ) : (
            <PageButton>
              <MdOutlineKeyboardArrowLeft size={24} />
            </PageButton>
          )
        }
        nextLabel={
          <PageButton>
            <MdOutlineKeyboardArrowRight size={24} />
          </PageButton>
        }
      />
      {showTheLastPageButton && (
        <LastOrFirstPageButton
          handleClick={() => handlePage(total - 1)}
          name={'Última'}
        />
      )}
    </S.Container>
  );
}
