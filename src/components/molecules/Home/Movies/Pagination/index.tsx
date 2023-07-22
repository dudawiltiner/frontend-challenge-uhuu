import PageButton from '@components/atoms/Home/Pagination/PageButton';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import LastOrFirstPageButton from '../../../../atoms/Home/Pagination/LastOrFirstPageButton';
import * as S from './styles';
import { PaginationProps } from './types';

export default function Pagination({
  handlePage,
  page,
  total,
}: PaginationProps) {
  const showTheLastPageButton = total !== 1;
  const showTheFirstPageButton = total !== 1 && page !== 0;

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