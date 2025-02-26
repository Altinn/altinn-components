import type { ReactNode } from 'react';
import { ListBase, Byline, Transmission, type TransmissionProps } from '..';

export interface TransmissionListItemProps extends TransmissionListProps {
  datetime?: string;
  dateline?: ReactNode;
}

export interface TransmissionListProps {
  items: TransmissionListItemProps[];
  className?: string;
}

export const TransmissionList = ({ items }: TransmissionListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ListBase margin={0}>
      {items.map((item, index) => {
        const { datetime, dateline } = item;

        return (
          <li key={item.id}>
            <ListBase>
              <Byline datetime={datetime}>{dateline}</Byline>
              <Transmission {...item} key={index} />
            </ListBase>
          </li>
        );
      })}
    </ListBase>
  );
};
