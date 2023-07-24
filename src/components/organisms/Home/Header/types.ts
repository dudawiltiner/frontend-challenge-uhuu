export interface HeaderProps {
  selectedIds: number[];
  handleSelectId: (value: number) => void;
  handleRemoveId: (value: number) => void;
}
