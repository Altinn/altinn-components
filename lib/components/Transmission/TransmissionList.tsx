import { ListBase } from '../List';
import { TransmissionItem, type TransmissionItemProps } from './TransmissionItem';
import { Toolbar, type ToolbarSearchProps, type ToolbarFilterProps } from '../Toolbar';

export interface TransmissionListProps {
  search?: ToolbarSearchProps;
  filters?: ToolbarFilterProps;
  items: TransmissionItemProps[];
  className?: string;
}

export const TransmissionList = ({ search, filters, items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ListBase>
      {(search || filters) && <Toolbar search={search} filters={filters} />}
      {items.map((item, index) => {
        return <TransmissionItem {...item} key={index} />;
      })}
    </ListBase>
  );
};
