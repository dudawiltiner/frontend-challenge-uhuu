export interface PaginationProps {
  handlePage: (value: number) => void;
  total: number;
  page: number;
}
