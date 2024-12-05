import { ListBase } from '../List';
import { TransmissionItem, type TransmissionItemProps } from './TransmissionItem';

export interface TransmissionListProps {
  items: TransmissionItemProps[];
  className?: string;
}

export const TransmissionList = ({ items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ListBase>
      {items.map((item, index) => {
        return <TransmissionItem {...item} key={index} />;
      })}
    </ListBase>
  );
};
