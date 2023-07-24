export interface FilterProps {
  selectedIds: number[];
  handleSelectId: (value: number) => void;
  handleRemoveId: (value: number) => void;
}
